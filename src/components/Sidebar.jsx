import styled from "styled-components";

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
          <Img src="https://i.ibb.co/3cjL9s1/h.png" />
        </Link>
        <Link href="#cubes!">
          <span>Cubes!</span>
          <Img src="https://i.ibb.co/wY6tL0Y/exclamation-mark.png" />
        </Link>
        <Link href="#team">
          <span>Team</span>
          <Img src="https://i.ibb.co/hFKbcG0/triforce.png" />
        </Link>
        <Link href="#faqs">
          <span>Faqs</span>
          <Img src="https://i.ibb.co/b371ZWY/question-mark.png" />
        </Link>
        <Link href="#roadmap">
          <span>Roadmap</span>
          <Img src="https://i.ibb.co/1dPjM2h/enchanting-table.png" />
        </Link>
      </DivContainer>
    </Section>
  );
};

export default Sidebar;
