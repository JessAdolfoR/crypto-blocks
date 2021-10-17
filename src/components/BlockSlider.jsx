import styled from "styled-components";
import Slider from "react-slick";
// Images
import buttonNext from "../images/buttons/button-next.png";
import buttonPrevius from "../images/buttons/button-prev.png";
// Utils
import { cubes } from "../utils/cubes";

const Section = styled.section`
  h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 64px;
  }
  padding: 4rem;

  @media (min-width: 480px) {
    h2 {
      font-size: 64px;
    }
  }

  @media (min-width: 992px) {
    width: 85%;
    margin: auto;
    padding: 100px 0 60px;
  }
`;

const Block = styled.div`
  img {
    max-width: 100%;
    padding: 25%;
    height: auto;
  }
`;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        backgroundImage: `url(${buttonNext})`,
        right: "-65px",
        width: "60px",
        height: "40px",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        backgroundImage: `url(${buttonPrevius})`,
        left: "-82px",
        width: "60px",
        height: "40px",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    />
  );
}
const BlockSlider = () => {
  var settings = {
    className: "center",
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <Section id="cubes!">
      <h2>The cubes</h2>
      <Slider {...settings}>
        {cubes.map((cube) => (
          <div key={cube.id}>
            <Block>
              <img src={cube.image} alt="" />
            </Block>
          </div>
        ))}
      </Slider>
    </Section>
  );
};

export default BlockSlider;
