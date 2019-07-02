import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { object } from 'prop-types';

// Components
import Button from '../buttons';

const Map = dynamic(() => import('../maps/Map'), {
  ssr: false
});

const OverviewCard = ({
  neighbourhood: {
    latitude,
    longitude,
    id,
    name,
    area,
    neighbourhoodPosition,
    neighbourhoodTotal
  }
}) => (
  <Wrapper>
    <TopWrapper>
      <Map latitude={latitude} longitude={longitude} height="350px" />
      <div className="gradient-fade" />
    </TopWrapper>
    <BottomWrapper>
      {/* <DataBar>
        <p>test</p>
      </DataBar> */}
      <Rank>
        <h2 className="rank-position">
          <span className="rank">{neighbourhoodPosition}</span>
          <span className="divider">/</span>
          <span className="rank-total">{neighbourhoodTotal}</span>
        </h2>
        <p className="rank-info">Totaal aantal buurten.</p>
      </Rank>
      <TextWrapper>
        <div className="text">
          <h1 id={id}>{name}</h1>
          <h2 id={id}>{area}</h2>
        </div>
      </TextWrapper>
      <ButtonWrapper>
        <Button
          type="submit"
          __type="square"
          className="button"
          iconType="arrow"
          text="Bekijk"
        />
      </ButtonWrapper>
    </BottomWrapper>
  </Wrapper>
);

export default OverviewCard;

OverviewCard.propTypes = {
  neighbourhood: object.isRequired
};

const Wrapper = styled.section`
  min-height: 400px;
  margin-bottom: 50px;
  h1,
  h2 {
    font-size: 4.5rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${({ theme }) => theme.purple};
    font-family: ${({ theme }) => theme.primaryFont};
    margin: 0;
  }
  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 100;
  }
`;

const TopWrapper = styled.div`
  background-color: #ffb8ae;
  overflow: hidden;
  border-radius: 40px 40px 0 0;
  height: 350px;
  width: 100%;
  position: relative;
  .gradient-fade {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 90px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.15)
    );
  }
`;

const BottomWrapper = styled.div`
  background-color: #1abc9c;
  background-color: ${({ theme }) => theme.pink};
  border-radius: 0 0 40px 40px;
  height: 300px;
  padding: 40px;
  display: flex;
  position: relative;
`;

const DataBar = styled.div``;

const Rank = styled.div`
  position: absolute;
  top: -53px;
  right: 8.9%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 22px 12px 12px 12px;
  .rank-position {
    font-weight: 600;
    color: #bf6283;
    display: flex;
    align-items: center;
    margin-right: 4px;
    .rank,
    .rank-total {
      line-height: 36px;
      font-family: ${({ theme }) => theme.secondaryFont};
    }
    .rank {
      color: ${({ theme }) => theme.darkGrey};
      font-size: 4.9rem;
    }
    .divider {
      font-size: 1.6rem;
      margin: 0 4px;
      color: ${({ theme }) => theme.lightGrey};
    }
    .rank-total {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.lightGrey};
    }
  }
  .rank-info {
    font-size: 1.23rem;
    font-weight: 500;
    color: ${({ theme }) => theme.mediumGrey};
    font-family: ${({ theme }) => theme.secondaryFont};
    margin: 0;
    margin-top: 2px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .text {
    max-width: 550px;
    h1,
    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  .button {
    width: 140px;
    height: 60px;
    font-size: 1.6rem;
    &:first-child {
      margin-right: 35px;
    }
  }
`;
