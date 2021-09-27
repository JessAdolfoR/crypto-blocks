import styled from "styled-components";
import Twitter from "../images/Twitter.png";
import Discord from "../images/Discord.png";
const FooterContainer = styled.footer`
  min-height: 350px;
  padding: 80px 50px 0;
  display: flex;
`;

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Brand = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 33%;
  }

  h4 {
    margin: 16px 0;
    font-size: 24px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    line-height: 26px;
  }
  .footer-menu {
    font-size: 20px;
    width: auto;
    padding-right: 96px;
    margin-top: 24px;
  }

  .footer-list {
    font-size: 20px;

    li {
      padding: 10px 0;
    }
  }

  .socials {
    a {
      display: inline-block;
    }

    img {
      width: 50px;
      margin-right: 8px;
    }
  }
`;

const Copyright = styled.div`
  padding: 24px 0;
  width: 100%;
  margin-top: 66px;
  display: flex;
  justify-content: center;
  align-items: center;

  p,
  a {
    font-size: 18px;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    margin-left: 24px;
    display: flex;

    img {
      margin-left: 8px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Brand>
          <h4>Blocks</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            excepturi officia ipsa ab delectus deserunt?
          </p>
        </Brand>
        <Brand>
          <div className="footer-menu socials">
            <h4>Social</h4>
            <a
              href="https://solsoulsnft.com/images/social_discord.png"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: -6 }}
            >
              <img src={Discord} alt="discord icon" />
            </a>
            <a
              href="https://solsoulsnft.com/images/social_discord.png"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="twitter icon" />
            </a>
          </div>
        </Brand>
        <Copyright>
          <span>© 2021 Crypto Blocks</span>
          <a href="https://solana.com/" target="_blank" rel="noreferrer">
            Built on{" "}
            <img
              src="https://solsoulsnft.com/images/solana-sol-logo.svg"
              alt="solana icon"
              style={{ width: 24 }}
            />
          </a>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
