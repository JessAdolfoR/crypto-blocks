import styled from "styled-components";
// Images
import logo from "../images/logo.png";
import Twitter from "../images/icons/twitter.png";
import Discord from "../images/icons/discord.png";

const Navbar = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100px;
    height: auto;
  }

  @media (min-width: 992px) {
    padding: 36px 0;
  }
`;

const Socials = styled.div`
  a {
    display: inline-block;
  }

  img {
    width: 50px;
    margin-right: 8px;
  }
`;

const Header = () => {
  return (
    <Navbar id="heroCubes">
      <img src={logo} alt="Everything Cubes logo" />
      <Socials>
        <div className="footer-menu socials">
          <a
            href="https://discord.gg/sJksT8msf8"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: -6 }}
          >
            <img src={Discord} alt="discord icon" />
          </a>
          <a
            href="https://twitter.com/everythingcubic"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter icon" />
          </a>
        </div>
      </Socials>
    </Navbar>
  );
};

export default Header;
