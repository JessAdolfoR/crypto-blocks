import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Container = styled.div`
  max-width: 1140px;
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

const HeroSection = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default HeroSection;
