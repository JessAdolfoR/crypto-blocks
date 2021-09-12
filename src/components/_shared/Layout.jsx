import styled from "styled-components";
// Comopnents

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#fff", width: "80%", margin: "auto" }}>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
