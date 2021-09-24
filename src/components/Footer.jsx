import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 350px;
  padding: 80px 50px 0;
  display: flex;
  background-image: url(http://pm1.narvii.com/6091/1ab0e31488f05afc7f870f47ce52563a1fbd7d6f_00.jpg);
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
    margin-top: 16px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  p {
    font-size: 20px;
    color: wheat;
    margin-top: 20px;
    line-height: 26px;
  }
  .footer-menu {
    font-size: 20px;
    width: auto;
    padding-right: 96px;
    margin-top: 24px;

    h4 {
      margin-bottom: 16px;
      color: #fff;
    }
  }

  .footer-list {
    font-size: 20px;

    li {
      padding: 10px 0;
    }

    a {
      color: wheat;
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
  border-top: 1px solid #303853;
  display: flex;
  justify-content: center;
  align-items: center;
  color: wheat;

  p,
  a {
    font-size: 18px;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    margin-left: 24px;
    color: wheat;
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
        </Brand>
        <Brand>
          <div className="footer-menu">
            <h4>Pixel Yetis</h4>
          </div>
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
              <img
                src="https://solsoulsnft.com/images/social_discord.png"
                alt="discord icon"
              />
            </a>
            <a
              href="https://solsoulsnft.com/images/social_discord.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://solsoulsnft.com/images/social_telegram.png"
                alt="telegram icon"
              />
            </a>
            <a
              href="https://solsoulsnft.com/images/social_discord.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://solsoulsnft.com/images/social_twitter.png"
                alt="twitter icon"
              />
            </a>
          </div>
        </Brand>
        <Copyright>
          <p>© 2021 Crypto Blocks</p>
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
