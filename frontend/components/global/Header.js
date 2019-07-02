import styled from 'styled-components';
import Link from 'next/link';
import { string, bool } from 'prop-types';

// Components
import LogoPolygon from '../media/svg/LogoPolygon';
import Icon from '../media/Icons';

const BackButton = ({ linkBack }) => (
  <Link href={linkBack}>
    <Button type="button">
      <Icon type="arrowBack" className="icon" />
    </Button>
  </Link>
);

BackButton.propTypes = {
  linkBack: string
};

const Header = ({ linkBack, showLinkBack }) => (
    <Wrapper>
      <ContentWrapper showLinkBack={showLinkBack}>
        <Toolbar>{showLinkBack && <BackButton linkBack={linkBack} />}</Toolbar>
        <LogoPolygon className="logo" />
      </ContentWrapper>
    </Wrapper>
  );

export default Header;

Header.propTypes = {
  linkBack: string,
  showLinkBack: bool
};

const Wrapper = styled.header`
  width: 100%;
  margin: 0 0 80px 0;
  background-color: ${({ theme }) => theme.mediumPurple};
  .logo {
    width: 109px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  display: flex;
  height: 60px;
  justify-content: ${({ showLinkBack }) => (showLinkBack ? "space-between" : "center")};
  transition: justify-content 0.3s ease-in-out;
  .logo {
    height: 150%;
    margin-top: 15px;
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 60px;
  height: 100%;
  border: 0px;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme }) => theme.purple};
  }
  &:focus {
    outline: 0;
  }
  .icon {
    width: 14px;
    transform: translate(-2px, 4px);
  }
`;
