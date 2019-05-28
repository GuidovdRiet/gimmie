import styled from "styled-components";
import Link from "next/link";

// Components
import Logo from "../media/svg/Logo";

const Header = () => {
  return (
    <Wrapper>
      <Logo fill="#FFCFC7" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/name">
        <a>Name</a>
      </Link>
      <Link href="/budget">
        <a>Budget</a>
      </Link>
      <Link href="/squarefeet">
        <a>Square feet</a>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0 45px 0;
  /* Logo  width="109.9" height="58.66" */
`;
