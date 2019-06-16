import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

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

PageLayout.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

export const Container = styled.main`
  max-width: 1184px;
  margin: 0 auto;
  position: relative;
  /* background-color: rgba(255, 255, 255, 0.03); */
`;
