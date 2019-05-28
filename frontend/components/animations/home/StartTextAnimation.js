import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const StartTextAnimation = () => {
  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 1200,
    config: config.stiff
  });

  return (
    <Wrapper style={{ opacity: opacity.interpolate(o => `${o}`) }}>
      {/* <Wrapper> */}
      <TextWrapper>
        <h1>
          Vindt de buurt die het beste bij je past.
          <br />
          <span>Een advies aan de hand van data.</span>
        </h1>
      </TextWrapper>
    </Wrapper>
  );
};

export default StartTextAnimation;

const Wrapper = styled(animated.section)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  display: flex;
  margin-left: 23%;
  align-items: center;
`;

const TextWrapper = styled.div`
  max-width: 720px;
  h1 {
    font-size: 6.4rem;
    color: ${({ theme }) => theme.pink};
    line-height: 1.24;
  }
  span {
    opacity: 0.14;
  }
`;
