import { withRouter } from 'next/router';
import { array } from 'prop-types';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Link from 'next/link';

// Components
import Header from '../components/global/Header';
import Card from '../components/cards';
import { Container } from '../components/global/PageLayout';
import InputWrapper from '../components/layout/InputWrapper';
import Button from '../components/buttons';

const Map = dynamic(() => import('../components/maps/Map'), {
  ssr: false
});

const Neighbourhood = ({ dataArray }) => {
  const [data] = dataArray;
  const {
 name, area, latitude, longitude 
} = data;
  return (
    <>
      <Header linkBack="/result" showLinkBack />
      <Container>
        <TopWrapper>
          <Map latitude={latitude} longitude={longitude} height="350px" />
          <div className="content-wrapper">
            <div className="street-info">
              <h1>{name}</h1>
              <h2>{area}</h2>
            </div>
            <Link
              href={`/neighbourhood?neighbourhood=${name}`}
              as={`/neighbourhood/${name}`}
            >
              <a>
                <Button
                  type="submit"
                  __type="square"
                  className="button"
                  iconType="arrow"
                  text={`Koop een huis in ${name}`}
                />
              </a>
            </Link>
          </div>
        </TopWrapper>
        {/* Set className for different background image */}
        {/* <BodyClassName className="area-svg" /> */}
      </Container>
    </>
  );
};

Neighbourhood.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `http://localhost:7777/neighbourhoods/single?neighbourhood=${
      query.neighbourhood
    }`
  );
  const dataArray = await res.json();

  return {
    dataArray
  };
};

Neighbourhood.propTypes = {
  dataArray: array.isRequired
};

export default withRouter(Neighbourhood);

const TopWrapper = styled.div`
  .content-wrapper {
    display: flex;
    justify-content: space-between;
    transform: translateY(-70px);
    padding: 0 20px 0 0;
    align-items: center;
  }
  .street-info {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.darkPurple};
    padding: 5px 10px;
    z-index: 99999;
    h1,
    h2 {
      font-family: ${({ theme }) => theme.primaryFont};
      ${({ theme }) => theme.fontSmoothing};
    }
  }
  .button {
    width: 300px;
    height: 60px;
    font-size: 1.6rem;
  }
`;
