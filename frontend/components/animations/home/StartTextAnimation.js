import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Router from "next/router";

// Components
import Button from "../../buttons";

const StartTextAnimation = () => {
  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 1200,
    config: config.stiff
  });

  const handleNextRoute = () => {
    Router.push("/name");
  };

  return (
    <Wrapper style={{ opacity: opacity.interpolate(o => `${o}`) }}>
      {/* <Wrapper> */}
      <TextWrapper>
        <h1>
          Vindt de buurt die het beste bij je past.
          <br />
          <span>Een advies aan de hand van data.</span>
        </h1>
        <ButtonWrapper>
          <Button
            className="button"
            text="Hoe dan?"
            __type="square"
            secondary
          />
          <Button
            className="button"
            text="Starten"
            __type="square"
            iconType="arrow"
            onClick={() => handleNextRoute()}
          />
        </ButtonWrapper>
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
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  max-width: 720px;
  h1 {
    font-size: 6.4rem;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.pink};
    line-height: 1.26;
  }
  span {
    opacity: 0.14;
    margin-top: 3px;
  }
`;

const ButtonWrapper = styled.div`
  /* background-color: rgba(255, 255, 255, 0.2); */
  .button {
    width: 170px;
    height: 60px;
    &:first-child {
      margin-right: 35px;
    }
  }
`;
