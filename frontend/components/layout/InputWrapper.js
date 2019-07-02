import styled from 'styled-components';
import { string, func, array } from 'prop-types';
import { useState, useMemo } from 'react';

// Components
import Icon from '../media/Icons';
import Button from '../buttons';
import Card from '../cards';
import DataPopup from './DataPopup';

// Data
import DataCategories from '../../data/dataCategories';

const InputWrapper = ({ userData, setUserData, className }) => {
  const [showPopup, setShowPopup] = useState(false);

  const cardCategories = useMemo(
    () => userData.map(data => DataCategories[data].cardTypes.map(category => category)),
    [userData]
  );

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
        <Card type="text" >
          
        </Card>
        {cardCategories
          && cardCategories.map(cardCategory => (
            <Card
              type="input"
              sort="data"
              buttonType="remove"
              className="input-wrapper-card"
            >
              <Icon type={cardCategory} sort="data" />
            </Card>
          ))}
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
  userData: array.isRequired
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
  .bottom-line {
    width: 100%;
    background-color: ${({ theme }) => theme.lightPurple};
    height: 1px;
    margin: 0px 10px 0 10px;
    flex: 1;
  }
`;
