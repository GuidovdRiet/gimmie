import { withRouter } from 'next/router';
import { useContext } from 'react';
import { array } from 'prop-types';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Link from 'next/link';
import BodyClassName from 'react-body-classname';

// Components
import Header from '../components/global/Header';
import Card from '../components/cards';
import { Container } from '../components/global/PageLayout';
import Button from '../components/buttons';
import Icon from '../components/media/Icons';

// Data
import infoData from '../data/infoData';

// Context
import { UserContext } from '../components/context/UserProvider';

const Map = dynamic(() => import('../components/maps/Map'), {
  ssr: false
});

const Neighbourhood = ({ dataArray }) => {
  const [data] = dataArray;
  const { budget, squareFeet } = useContext(UserContext);

  const {
    name,
    area,
    latitude,
    longitude,
    airQuality,
    airQualityAverage,
    view,
    safetyAverage,
    parking,
    ownParkingSpot,
    publicTransport,
    bakery,
    greengrocer,
    butcher,
    schoolBasis,
    schoolMiddelbaar,
    schoolVMBO,
    schoolVWOHAVO,
    noiseDisturbance,
    waterDisturbanceUnderneathHome,
    noiseDisturbanceTraffic,
    isulationOutside,
    isulationNeighbours,
    indoorSports
  } = data;

  const dataTypes = {
    // airQuality,
    view,
    safetyAverage,
    parking,
    ownParkingSpot,
    publicTransport,
    bakery,
    greengrocer,
    butcher,
    schoolBasis,
    schoolMiddelbaar,
    schoolVMBO,
    schoolVWOHAVO,
    noiseDisturbance,
    waterDisturbanceUnderneathHome,
    noiseDisturbanceTraffic,
    isulationOutside,
    isulationNeighbours,
    indoorSports
  };

  return (
    <>
      <Header linkBack="/result" showLinkBack />
      {/* Set className for different background image */}
      <BodyClassName className="area-svg" />
      <Container>
        <TopWrapper>
          <Map latitude={latitude} longitude={longitude} height="350px" />
          <div className="content-wrapper">
            <div className="street-info">
              <h1>{name}</h1>
              <h2>{area}</h2>
            </div>
            <a
              href={`https://www.funda.nl/koop/rotterdam/${name}/0-${budget}/`}
              rel="noopener noreferrer"
              _target="blank"
            >
              <Button
                type="submit"
                __type="square"
                className="button"
                iconType="arrow"
                text={`Koop een huis in ${name}`}
              />
            </a>
          </div>
        </TopWrapper>
        <CardWrapper>
          {/* TEMP for demo to show data */}
          <Card
            type="info"
            sort="data"
            className="popup-card"
            score={airQuality}
            average={airQualityAverage}
            name={infoData.airQuality.name}
            icon={infoData.airQuality.icon}
            onClick={() => console.log('click')}
          />
          {Object.keys(dataTypes).map(key => (
            <Card
              key={key}
              type="info"
              sort="data"
              className="popup-card"
              score={dataTypes[key]}
              name={infoData[key].name}
              icon={infoData[key].icon}
              onClick={() => console.log('click')}
            />
          ))}
        </CardWrapper>
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
    margin-top: -85px;
    padding: 0 33px 0 24px;
    align-items: center;
  }
  .street-info {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.darkPurple};
    padding: 25px 25px;
    z-index: 99999;
    h1,
    h2 {
      font-family: ${({ theme }) => theme.primaryFont};
      ${({ theme }) => theme.fontSmoothing};
      font-size: 4.5rem;
      line-height: 1.3;
      font-weight: 400;
      margin: 0;
    }
    h1 {
      font-weight: 500;
    }
    h2 {
      font-weight: 100;
    }
  }
  .button {
    width: 300px;
    height: 60px;
    font-size: 1.6rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  .popup-card {
    margin: 20px;
  }
`;
