import styled from "styled-components";
// Comopnents
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#fff", width: "80%", margin: "auto" }}>
      {/* <Header /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
