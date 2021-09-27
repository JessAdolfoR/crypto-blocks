import styled from "styled-components";
import Slider from "react-slick";
// Images
import block01 from "../images/blocks/1.png";
import block02 from "../images/blocks/2.png";
import block03 from "../images/blocks/3.png";
import block04 from "../images/blocks/4.png";
import block05 from "../images/blocks/5.png";
import block06 from "../images/blocks/6.png";
import buttonNext from "../images/button-next.png";
import buttonPrevius from "../images/button-next-2.png";

const Section = styled.section`
  padding: 100px 0 60px;

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 64px;
  }
  padding: 4rem;
  @media (min-width: 992px) {
    h2 {
      font-size: 64px;
    }
    padding: 0;
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
    speed: 2000,
    autoplaySpeed: 3000,
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
    <Section>
      <h2>Some Blocks</h2>
      <Slider {...settings}>
        <div>
          <Block>
            <img src={block01} alt="" />
          </Block>
        </div>
        <div>
          <Block>
            <img src={block02} alt="" />
          </Block>
        </div>
        <div>
          <Block>
            <img src={block03} alt="" />
          </Block>
        </div>
        <div>
          <Block>
            <img src={block04} alt="" />
          </Block>
        </div>
        <div>
          <Block>
            <img src={block05} alt="" />
          </Block>
        </div>
        <div>
          <Block>
            <img src={block06} alt="" />
          </Block>
        </div>
      </Slider>
    </Section>
  );
};

export default BlockSlider;
