import styled from "styled-components";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

// Images
import logo from "../images/blocks/0.png";
import button from "../images/button.png";

const Navbar = styled.header`
  width: 100%;
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 60px;
    height: auto;
  }

  @media (min-width: 992px) {
    padding: 36px 0;
  }
`;

const ConnectButton = styled(WalletMultiButton)`
  min-width: 175px;
  height: 60px;
  border-radius: 3px;
  background-color: unset;
  background-image: url(${button});
  background-size: cover;
  background-position: center;
  color: #224c4c;
  font-family: "Porcine Bosk";

  span,
  i {
    margin-top: -16px;
  }

  &:not([disabled]):hover {
    background-image: url(${button});
    background-size: cover;
  }

  &[disabled] {
    background-color: #bdeeff;
    background-color: unset;
    background-image: url(${button});
    background-size: cover;
    background-position: center;
    color: #224c4c;
    justify-content: center !important;
  }
`;

const DisconnectButton = styled(WalletDisconnectButton)`
  min-width: 175px;
  height: 60px;
  border-radius: 3px;
  background-color: unset;
  background-image: url(${button});
  background-size: cover;
  background-position: center;
  color: #224c4c;
  font-family: "Porcine Bosk";

  span,
  i {
    margin-top: -16px;
  }

  &:not([disabled]):hover {
    background-image: url(${button});
    background-size: cover;
  }
`;

const Header = ({ wallet }) => {
  return (
    <Navbar>
      <img src={logo} alt="Crypto Blocks logo" />
      {wallet ? (
        <DisconnectButton>
          <span>Disconnet</span>
        </DisconnectButton>
      ) : (
        <ConnectButton>
          <span>Select Wallet</span>
        </ConnectButton>
      )}
    </Navbar>
  );
};

export default Header;
