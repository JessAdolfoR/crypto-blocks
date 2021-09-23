import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../utils/candy-machine";

const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 12px 36px;
  justify-content: flex-end;
  align-items: center;
`;

const Address = styled.div`
  padding: 12px 36px;
  p {
    text-align: end;
  }
`;

const MintContainer = styled.div`
  padding: 12px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 180px;
    padding: 16px 0;
    height: 50px;
    border: none;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  button[disabled] {
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    justify-content: center !important;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const LeftGrid = styled.div`
  text-align: center;
  padding: 1rem;
  flex-basis: 100%;
  max-width: 100%;
  margin-top: 80px;

  order: 1;

  .socials {
    a {
      display: inline-block;
    }

    img {
      width: 50px;
      margin-right: 8px;
    }
  }

  @media (min-width: 992px) {
    flex-basis: 66.666%;
    max-width: 66.666%;
    order: unset;
    margin-right: 64px;
    margin-top: 0;
  }
`;

const RightGrid = styled.div`
  flex-basis: 100%;
  max-width: 100%;

  padding: 0 20px;
  position: relative;

  .cadre {
    width: 100%;
    position: relative;
  }

  .show {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #000;
    color: #111;
    border-radius: 10px;
    box-shadow: 2px 2px 0 #000;
    padding: 1rem;
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 992px) {
    flex-basis: 33.333%;
    max-width: 33.333%;
  }
`;

const ConnectButton = styled(WalletMultiButton)``;

const DisconnectButton = styled(WalletDisconnectButton)``;

const CounterText = styled.span``;

const MintButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    color: #fff;
  }
`;

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Mint = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <>
      <Header>
        {wallet ? (
          <DisconnectButton>Disconnet</DisconnectButton>
        ) : (
          <ConnectButton />
        )}
      </Header>
      <div>
        {wallet ? (
          <Address>
            <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
            <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
          </Address>
        ) : null}
        <MintContainer>
          <Container>
            <LeftGrid>
              <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
                Crypto Blocks
              </h1>
              <p>Just a blocks, but fabolous blocks </p>
            </LeftGrid>
            <RightGrid>
              <div className="cadre">
                <div className="show">
                  <img
                    src="https://www.pudgypenguins.io/images/site/home-gif-v2.gif"
                    alt=""
                  />
                </div>
              </div>
            </RightGrid>
          </Container>
          {wallet ? (
            <MintButton
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress
                    size={32}
                    thickness={5}
                    className="spinner"
                  />
                ) : (
                  "MINT"
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </MintButton>
          ) : (
            <ConnectButton />
          )}
        </MintContainer>
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {days} days {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Mint;
