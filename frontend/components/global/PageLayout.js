import styled from "styled-components";

// Style
import GlobalStyle from "../../common/globalStyle";

// Components
import Header from "./Header";
import Area from "../media/svg/Area";

const PageLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      {children}
    </Container>
  );
};

export default PageLayout;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;
