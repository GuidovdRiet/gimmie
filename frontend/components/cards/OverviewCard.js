import styled from "styled-components";
import dynamic from "next/dynamic";
import { object } from "prop-types";

// Components
import Button from "../buttons";

const Map = dynamic(() => import("../maps/Map"), {
  ssr: false
});

const OverviewCard = ({ neighbourhood }) => {
  return (
    <Wrapper>
      <TopWrapper>
        <Map
          latitude={neighbourhood.latitude}
          longitude={neighbourhood.longitude}
          height="350px"
        />
        <div className="gradient-fade" />
      </TopWrapper>
      <BottomWrapper>
        <TextWrapper>
          <div className="text">
            <h1 id={neighbourhood.id}>{neighbourhood.name}</h1>
            <h2 id={neighbourhood.id}>{neighbourhood.area}</h2>
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
};

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
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
