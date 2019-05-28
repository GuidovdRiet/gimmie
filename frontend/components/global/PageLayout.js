import styled from "styled-components";

// Style
import GlobalStyle from "../../common/globalStyle";

// Components
import UserProvider from "../context/UserProvider";

const PageLayout = ({ children }) => {
  return (
    <UserProvider>
      {/* <Container> */}
      <GlobalStyle />
      {children}
      {/* </Container> */}
    </UserProvider>
  );
};

export default PageLayout;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;
