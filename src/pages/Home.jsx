import styled from "styled-components";

//components
import Grid from "../components/Showcase";
import HeroSection from "../components/Banner";

const Section = styled.section`
  min-height: 50vh;
  background-color: #fff;
  padding: 120px 50px;
  margin-top: 64px;
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
    flex-direction: column;
  }
`;

const MintSection = () => {
  return (
    <Section>
      <Container>
        <HeroSection />
        <Grid />
      </Container>
    </Section>
  );
};

export default MintSection;
