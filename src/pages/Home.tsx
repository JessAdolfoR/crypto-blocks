import styled from "styled-components";
//Components
import Header from "../components/Header";
import DataSquares from "../components/DataSquares";
import BlockSlider from "../components/BlockSlider";
import Team from "../components/Team";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import RoadMap from "../components/RoadMap";
import Sidebar from "../components/Sidebar";

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

const Home = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Header />

      <HeroSection />

      <DataSquares />

      <BlockSlider />

      <Team />

      <Faqs />

      <RoadMap />

      <Footer />
    </MainContainer>
  );
};

export default Home;
