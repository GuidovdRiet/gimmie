import styled from "styled-components";

// Components
import Logo from "../media/svg/Logo";

const Header = () => {
  return (
    <Wrapper>
      <Logo fill="#FFCFC7" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
