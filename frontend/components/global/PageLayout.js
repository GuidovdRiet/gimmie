import styled from "styled-components";

// Style
import GlobalStyle from "../../common/globalStyle";

// Components
import UserProvider from "../context/UserProvider";

const PageLayout = ({ children }) => {
  return (
    <UserProvider>
      <GlobalStyle />
      {children}
    </UserProvider>
  );
};

export default PageLayout;

export const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: rgba(255, 255, 255, 0.03);
`;
