import styled from "styled-components";
import GlobalStyle from "../../common/globalStyle";

const PageLayout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  );
};

export default PageLayout;

const Main = styled.main``;
