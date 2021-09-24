import styled from "styled-components";
import Slider from "react-slick";
// Images
import block01 from "../images/block01.png";
import block02 from "../images/block02.png";
import block03 from "../images/block03.png";
import block04 from "../images/block04.png";
import block05 from "../images/block05.png";
import block06 from "../images/block06.png";

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

const Block = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

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
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
