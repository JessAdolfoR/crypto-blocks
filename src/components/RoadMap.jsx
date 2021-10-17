import React from "react";
import styled from "styled-components";
// Images
import buttonNext from "../images/buttons/double-chevron.png";

const POINTS = [
  {
    title: "First stage of minting",
    description: "300 cubes available for minting via candy machine.",
    arrow: true,
  },
  {
    title: "Feature other artists and do collabs",
    description:
      "Encourage independent artists from the community and artists from other projects to be featured in the collection.",
    arrowDown: true,
  },
  {
    title: "Second stage of minting",
    description:
      "300 more cubes, including featured cubes, available for minting (via candy machine or fair launch protocol).",
    block: true,
    arrow: true,
  },
  {
    title: "Release NFT Gallery",
    description:
      "A custom UI to display your NFTs and share them with the community.",
    block: true,
  },
  {
    title: "Keep growing",
    description:
      "Release cubes at a much slower pace through collabs with different artists and projects, auctions, airdrops, giveaways and special events.",
  },
];

const Section = styled.section`
  padding: 80px 0 50px;

  h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 64px;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 64px;
    }
  }

  @media (min-width: 992px) {
    padding: 100px 0 60px;
    h2 {
      font-size: 64px;
    }
  }
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  flex-basis: 420px;
  max-width: 420px;
  padding: 20px;
  border: 4px solid #224c4c7a;
  margin: 0 24px 36px;
  position: relative;
  background-color: ${(props) =>
    props.isBlock ? "#b4ddef" : "rgba(210, 245, 255)"};
  border-radius: 5px;
  margin-bottom: 40px;

  h3 {
    margin-bottom: 12px;
    font-size: 25px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  margin-top: 5%;
  img {
    max-width: 70px;
    transform: rotate(90deg);
  }
`;

const ArrowRight = styled.img`
  max-width: 60px;
  height: 40px;
`;

const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 24px 36px;
  justify-content: center;
`;

const RoadMap = () => {
  return (
    <Section id="roadmap">
      <h2>Roadmap</h2>
      <Container>
        {POINTS.map((point) => (
          <React.Fragment key={point.title}>
            <Card isBlock={point.block} key={point.title}>
              <div className="info">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </Card>
            <ContainerImg>
              {point.arrow ? <ArrowRight src={buttonNext} alt="" /> : null}
            </ContainerImg>

            {point.arrowDown ? <Arrow /> : null}
          </React.Fragment>
        ))}
      </Container>
    </Section>
  );
};

export default RoadMap;
