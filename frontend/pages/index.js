import styled from "styled-components";

// Components
import StartLogoAnimation from "../components/animations/home/StartLogoAnimation";
import StartTextAnimation from "../components/animations/home/StartTextAnimation";

const index = () => {
  return (
    <Container>
      <StartTextAnimation />
      <Wrapper>
        <StartLogoAnimation />
      </Wrapper>
    </Container>
  );
};

export default index;

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.purple};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-height: 100vh; */
`;
