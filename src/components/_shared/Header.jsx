import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Components

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Navbar = styled.header`
  width: 100%;
  max-width: 1440px;
  background: #694c27;
  margin: 0 auto;
`;

const NavbarContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
  display: flex;
`;

const Logo = styled(Link)`
  background-image: url("https://static.turbosquid.com/Preview/2019/07/21__10_50_25/Grass_Block_Thumbnail_1.png9537E6EB-9C45-40A6-B467-C10A2C26401BDefault.jpg");
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 24px;
  height: 38px;
  align-items: center;
  .nav-links {
      display:flex;
  }


  @media (min-width: 992px) {
    .nav-links {
      background: transparent;
      flex-direction: row;
      position: relative;
      transform: translateX(0);
      transition: none;
      li {
        margin-left: 1rem;
      }
    }

    .toggle-btn {
      display: none;
    }


  }
`;

const MenuItem = styled.li`
  padding: 6px 24px;
  display: -moz-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-decoration: none;
  font-size: 18px;
  color:wheat;
`;

const Header = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <HeaderContainer>
      <Navbar>
        <NavbarContent>
          <Logo to="/"></Logo>
          <MenuContainer>
            <div className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <MenuItem>
                <Link to="/">HOME</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/gallery">GALLERY</Link>
              </MenuItem>
            </div>
            <button
              className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
              type="button"
              onClick={toggleNav}
              aria-label="Menu Button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </MenuContainer>
        </NavbarContent>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
