import styled from "styled-components";
// Images
import blocksGif from "../images/cubes/showcase-cubes.gif";

const Section = styled.section`
  padding: 100px 0 60px;
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
    border-radius: 5px;
  }

  @media (min-width: 992px) {
    flex-basis: 40%;
    max-width: 40%;
  }
`;

const HeroSection = () => {
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
      </RightGrid>
    </Section>
  );
};

export default HeroSection;
