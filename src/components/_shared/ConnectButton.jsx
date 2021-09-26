import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// Images
import button from "../../images/button.png";

const Button = styled(WalletMultiButton)`
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

const ConnectButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default ConnectButton;
