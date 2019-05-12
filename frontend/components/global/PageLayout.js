import styled from "styled-components";

// Style
import GlobalStyle from "../../common/globalStyle";

// Components
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Main>
      <Header />
      <GlobalStyle />
      {children}
    </Main>
  );
};

export default PageLayout;

const Main = styled.main``;
