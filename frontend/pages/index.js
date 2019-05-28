import styled from "styled-components";
import { useSpring, animated, interpolate } from "react-spring";

// Components
import LogoParts from "../components/media/svg/LogoParts";

const index = () => {
  const { o, xyz, color } = useSpring({
    from: { o: 0, xyz: [0, 0, 0], color: "red" },
    o: 1,
    xyz: [10, 20, 5],
    color: "green"
  });

  return (
    <Wrapper>
      <LogoParts />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  svg {
    fill: ${({ theme }) => theme.pink};
    width: 100%;
    height: 100%;
  }
`;
