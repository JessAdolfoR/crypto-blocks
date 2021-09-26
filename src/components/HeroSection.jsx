import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import Countdown from "react-countdown";
// Components
import ConnectButton from "./_shared/ConnectButton";
// Images
import blocksGif from "../images/blocks/blocks.gif";
import button from "../images/button.png";

const Section = styled.section`
  padding: 60px 0;
  display: flex;
  flex-direction: column;

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

  @media (min-width: 480px) {
    h1 {
      font-size: 80px;
    }
  }

  @media (min-width: 992px) {
    flex-basis: 60%;
    max-width: 60%;
    order: unset;
    margin-top: 0;

    h1 {
      font-size: 120px;
      margin-bottom: 32px;
    }
  }
`;

const RightGrid = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 350px;
    max-width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 64px;
    background-color: rgba(210, 245, 255, 0.3);
    border-radius: 5px;
  }

  button {
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
    flex-basis: 40%;
    max-width: 40%;
  }
`;

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

const CounterText = styled.span``;

const HeroSection = (props) => {
  const {
    wallet,
    isSoldOut,
    isMinting,
    isActive,
    startDate,
    onMint,
    setIsActive,
  } = props;

  return (
    <Section>
      <LeftGrid>
        <h1>Crypto Blocks</h1>
        <h2>500 Blocks on the Solana Blockchain</h2>
        <p className="description">
          Blocks description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Necessitatibus, iusto!
        </p>
      </LeftGrid>
      <RightGrid>
        <img src={blocksGif} alt="blocks showcase" />
        {wallet ? (
          <MintButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress size={32} thickness={5} className="spinner" />
              ) : (
                <span>MINT A BlOCK</span>
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
          <ConnectButton>
            <span>MINT A BlOCK</span>
          </ConnectButton>
        )}
      </RightGrid>
    </Section>
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <CounterText>
      {days} days {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default HeroSection;
