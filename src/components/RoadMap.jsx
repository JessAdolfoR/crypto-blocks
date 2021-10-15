import styled from "styled-components";
// Images
import buttonNext from "../images/buttons/double-chevron.png";
const POINTS = [
  {
    title: "🚀  Wave 3 Launch: 10/3 - 7:30 AM PDT",
    description: "300 cubes available for mint",
    arrow: true,
  },
  {
    title: "2nd Generation",
    description: "We will bring second generation as soon as possible!",
    arrowDown: true,
  },
  {
    title: "Comming Soon",
    description: "Comming Soon",
    block: true,
    arrow: true,
  },
  {
    title: "Comming Soon",
    description: "Comming Soon",
    block: true,
  },
];

const Section = styled.section`
  padding: 100px 0 60px;

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 64px;
  }

  @media (min-width: 992px) {
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
  flex-basis: 390px;
  max-width: 390px;
  padding: 12px;
  border: 4px solid #224c4c7a;
  margin: 0 24px 36px;
  position: relative;
  background-color: ${(props) =>
    props.isBlock ? "#b4ddef" : "rgba(210, 245, 255)"};
  border-radius: 5px;
  margin-bottom: 40px;
  h3 {
    margin-left: 20px;
    font-size: 25px;
  }
  p {
    margin-left: 20px;
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
    <Section>
      <h2>Roadmap</h2>
      <Container>
        {POINTS.map((point) => (
          <>
            <Card isBlock={point.block} key={point.title}>
              <div className="info">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </Card>
            <ContainerImg>
              {point.arrow ? <ArrowRight src={buttonNext} alt="" /> : null}
            </ContainerImg>

            {point.arrowDown ? (
              <Arrow>{/* <img src={buttonNext} alt="" /> */}</Arrow>
            ) : null}
          </>
        ))}
      </Container>
    </Section>
  );
};

export default RoadMap;
