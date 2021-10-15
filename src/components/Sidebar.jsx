import styled from "styled-components";
import HomeBlock from "../images/menu-cubes/h.png";
import TeamBlock from "../images/menu-cubes/triforce.png";
import CubesBlock from "../images/menu-cubes/exclamation-mark.png";
import RoadMapBlock from "../images/menu-cubes/enchanting-table.png";
import QuestionBlock from "../images/menu-cubes/question-mark.png";

const Section = styled.section`
  display: none;

  @media (min-width: 1350px) {
    position: fixed;
    left: auto;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.8rem;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  margin: 0.5rem 0;
  color: #224c4c;
  font-size: 1.25rem;
  line-height: 1.31;
  text-decoration: none;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  span {
    margin-right: 0.75rem;
  }
`;

const Img = styled.img`
  width: 2.25rem;
`;

const Sidebar = () => {
  return (
    <Section>
      <DivContainer>
        <Link href="#heroCubes">
          <span>Home</span>
          <Img src={HomeBlock} />
        </Link>
        <Link href="#cubes!">
          <span>Cubes!</span>
          <Img src={CubesBlock} />
        </Link>
        <Link href="#team">
          <span>Team</span>
          <Img src={TeamBlock} />
        </Link>
        <Link href="#faqs">
          <span>Faqs</span>
          <Img src={QuestionBlock} />
        </Link>
        <Link href="#roadmap">
          <span>Roadmap</span>
          <Img src={RoadMapBlock} />
        </Link>
      </DivContainer>
    </Section>
  );
};

export default Sidebar;
