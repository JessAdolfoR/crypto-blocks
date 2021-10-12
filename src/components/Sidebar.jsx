import styled from "styled-components";
import HomeBlock from "../images/Metal-slug-H.png";
import TeamBlock from "../images/Triforce.png";
import CubesBlock from "../images/Exclamation-cube.png";
import RoadMapBlock from "../images/Enchanting-table.png";

const Section = styled.section`
  position: fixed;
  left: auto;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.2rem;
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
  font-size: 1.3em;
  line-height: 1.31;
  text-decoration: none;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Img = styled.img`
  width: 3rem;
`;

const Sidebar = () => {
  return (
    <Section>
      <DivContainer>
        <Link href="#heroCubes">
          <span style={{ marginRight: "1rem" }}>Home</span>
          <Img src={HomeBlock} />
        </Link>
        <Link href="#cubes!">
          <span style={{ marginRight: "1rem" }}> Cubes!</span>
          <Img src={CubesBlock} />
        </Link>
        <Link href="#team">
          <span style={{ marginRight: "1rem" }}> Team </span>
          <Img src={TeamBlock} />
        </Link>
        <Link href="#faqs">
          <span style={{ marginRight: "1rem" }}> Faqs</span>
          <Img src={CubesBlock} />
        </Link>
        <Link href="#roadmap">
          <span style={{ marginRight: "1rem" }}>Roadmap </span>
          <Img src={RoadMapBlock} />
        </Link>
      </DivContainer>
    </Section>
  );
};

export default Sidebar;
