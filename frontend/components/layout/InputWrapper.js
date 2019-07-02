import styled from 'styled-components';
import {
 string, func, array, number 
} from 'prop-types';
import { useState, useMemo } from 'react';

// Components
import Icon from '../media/Icons';
import Button from '../buttons';
import Card from '../cards';
import DataPopup from './DataPopup';

// Data
import DataCategories from '../../data/dataCategories';

const InputWrapper = ({
  userData,
  setUserData,
  budget,
  squareFeet,
  className
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const cardCategories = useMemo(
    () => userData.map(data => DataCategories[data].cardTypes.map(category => category)),
    [userData]
  );

  console.log({ userData });

  return (
    <>
      {showPopup && (
        <DataPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserData={setUserData}
          userData={userData}
        />
      )}
      <Wrapper className={className}>
        <div className="title-wrapper">
          <i className="input-status" />
          <p className="input-title">Woonsituatie</p>
        </div>
        <div className="wrapper-top">
          <Icon type="houseRounded" className="icon" sort="rounded" />
          <i className="input-line" />
          <Button
            __type="adjust"
            iconType="cross"
            iconColor="white"
            className="input-button"
            onClick={() => setShowPopup(!showPopup)}
          />
        </div>
        <div className="card-wrapper">
          <Card type="text" sort="data">
            <p>Budget</p>
            <h2>{budget}</h2>
          </Card>
          <Card type="text" sort="data">
            <p>Vierkante meter</p>
            <h2>{squareFeet}</h2>
          </Card>
          {cardCategories
            && cardCategories.map((cardCategory, i) => (
              <Card
                type="input"
                sort="data"
                buttonType="remove"
                className="input-wrapper-card"
                onClick={
                  () => setUserData(userData.filter((_, index) => index !== i)) // remove element from array
                }
              >
                <Icon type={cardCategory} sort="data" />
              </Card>
            ))}
        </div>
        <div className="wrapper-bottom">
          <i className="bottom-line" />
        </div>
      </Wrapper>
    </>
  );
};

export default InputWrapper;

InputWrapper.propTypes = {
  className: string,
  setUserData: func.isRequired,
  userData: array.isRequired,
  budget: number.isRequired,
  squareFeet: number.isRequired
};

const Wrapper = styled.div`
  /* background-color: rgba(230, 126, 34, 0.2); */
  .title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 33px;
    transform: translateX(-17px);
  }
  .input-status {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.shamrock};
    margin-right: 15px;
  }
  .input-title {
    font-size: 2.3rem;
    font-weight: 500;
    ${({ theme }) => theme.fontSmoothing};
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.highlightPurple};
    margin: 0;
  }
  .wrapper-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 9px;
    margin-bottom: 40px;
    .icon {
      width: 60px;
    }
    .input-line {
      flex: 1;
      background-color: ${({ theme }) => theme.lightPurple};
      height: 1px;
      margin: 0 20px;
    }
  }
  .input-wrapper-card {
    margin-bottom: 40px;
  }
  .wrapper-bottom {
    display: flex;
  }
  .card-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
  .bottom-line {
    width: 100%;
    background-color: ${({ theme }) => theme.lightPurple};
    height: 1px;
    margin: 0px 10px 0 10px;
    flex: 1;
  }
`;
