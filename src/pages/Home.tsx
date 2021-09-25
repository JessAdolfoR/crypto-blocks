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

// Images
import blocksShowcase from "../images/blocks-showcase.gif";
import button from "../images/button.png";
//Components
import BlockSlider from "../components/BlockSlider";
import Faqs from "../components/Faqs";
import Team from "../components/Team";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 24px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    padding: 0 36px;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 0;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

const Address = styled.div`
  padding: 12px 0px;

  p {
    text-align: end;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const LeftGrid = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin-top: 80px;
  order: 1;

  h1 {
    font-size: 64px;
    margin-bottom: 32px;
  }

  h2 {
    margin-bottom: 16px;
  }

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
    flex-basis: 50%;
    max-width: 50%;
    order: unset;
    margin-top: 0;

    h1 {
      font-size: 120px;
      margin-bottom: 32px;
    }
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 80px;
    }
  }
`;

const RightGrid = styled.div`
  flex-basis: 100%;
  max-width: 100%;

  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    margin: auto;
    min-width: 175px;
    height: 60px;
    background-color: unset;
    background-image: url(${button});
    background-size: cover;
    background-position: center;
    color: #224c4c;
    font-weight: 600;
    border-radius: 3px;
    font-family: "Porcine Bosk";
    cursor: pointer;
    letter-spacing: 2px;

    span,
    i {
      margin-top: -16px;
    }
  }

  button:not([disabled]):hover {
    background-image: url(${button});
    background-size: cover;
  }

  button[disabled] {
    background-color: unset;
    background-image: url(${button});
    background-size: cover;
    background-position: center;
    color: #224c4c;
    justify-content: center !important;
  }

  @media (min-width: 992px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const ConnectButton = styled(WalletMultiButton)`
  min-width: 175px;
  height: 60px;
  border-radius: 3px;
  background-color: unset;
  background-image: url(${button});
  background-size: cover;
  background-position: center;
  color: #224c4c;
  font-family: "Porcine Bosk";

  span,
  i {
    margin-top: -16px;
  }

  &:not([disabled]):hover {
    background-image: url(${button});
    background-size: cover;
  }

  &[disabled] {
    background-color: #bdeeff;
    background-color: unset;
    background-image: url(${button});
    background-size: cover;
    background-position: center;
    color: #224c4c;
    justify-content: center !important;
  }
`;

const DisconnectButton = styled(WalletDisconnectButton)`
  min-width: 175px;
  height: 60px;
  border-radius: 3px;
  background-color: unset;
  background-image: url(${button});
  background-size: cover;
  background-position: center;
  color: #224c4c;
  font-family: "Porcine Bosk";

  span,
  i {
    margin-top: -16px;
  }

  &:not([disabled]):hover {
    background-image: url(${button});
    background-size: cover;
  }
`;

const CounterText = styled.span``;

const MintButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  span,
  i {
    margin-top: -16px;
  }

  .spinner {
    color: #224c4c;
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

const Home = (props: HomeProps) => {
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
    <MainContainer>
      <Header>
        {wallet ? (
          <DisconnectButton>
            <span>Disconnet</span>
          </DisconnectButton>
        ) : (
          <ConnectButton>
            <span>Select Wallet</span>
          </ConnectButton>
        )}
      </Header>
      <div>
        {wallet ? (
          <Address>
            <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
            <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
          </Address>
        ) : null}
        <div>
          <Container>
            <LeftGrid>
              <h1>Crypto Blocks</h1>
              <h2>500 Blocks on the Solana Blockchain</h2>
              <p className="description">
                Blocks description Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus, iusto!
              </p>
            </LeftGrid>
            <RightGrid>
              <img src={blocksShowcase} alt="blocks showcase" />
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
                      <span>MINT A BlOCK</span>
                    )
                  ) : (
                    <Countdown
                      date={startDate}
                      onMount={({ completed }) =>
                        completed && setIsActive(true)
                      }
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
              ) : (
                <ConnectButton>
                  <span>MINT A BlOCK</span>
                </ConnectButton>
              )}
            </RightGrid>
          </Container>
        </div>
      </div>

      <BlockSlider />
      <Team />
      <Faqs />
      <Footer />

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
    </MainContainer>
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

export default Home;
