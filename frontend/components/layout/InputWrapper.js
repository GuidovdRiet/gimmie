import styled from "styled-components";
import { string } from "prop-types";
import { useState } from "react";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";
import Card from "../cards";

const InputWrapper = ({ className }) => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && (
        <PopupContainer>
          <div className="popup-wrapper">
            <Button
              onClick={() => setShowPopup(!showPopup)}
              __type="adjust"
              iconType="cross"
              iconColor="white"
              className="popup-button"
              remove
            />
            <PopupCardWrapper>
              <Card type="input" sort="data" className="popop-card">
                <Icon type="dog" sort="data" />
              </Card>
              <Card type="input" sort="data" className="popop-card">
                <Icon type="dog" sort="data" />
              </Card>
              <Card type="input" sort="data" className="popop-card">
                <Icon type="dog" sort="data" />
              </Card>
              <Card type="input" sort="data" className="popop-card">
                <Icon type="dog" sort="data" />
              </Card>
              <Card type="input" sort="data" className="popop-card">
                <Icon type="dog" sort="data" />
              </Card>
            </PopupCardWrapper>
          </div>
        </PopupContainer>
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
        <Card type="input" sort="data" buttonType="remove">
          <Icon type="dog" sort="data" />
        </Card>
        <div className="wrapper-bottom">
          <i className="bottom-line" />
        </div>
      </Wrapper>
    </>
  );
};

export default InputWrapper;

InputWrapper.propTypes = {
  className: string
};

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(34, 2, 87, 0.9);
  box-shadow: ${({ theme }) => theme.bs};
  width: 100%;
  height: 100vh;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-wrapper {
    min-width: 900px;
    min-height: 700px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 40px;
  }
  .icon {
    fill: ${({ theme }) => theme.lightGrey};
    max-width: 30px;
  }
  .popup-button {
    margin: 40px;
  }
`;

const PopupCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .popop-card {
    width: 28.89%;
    margin: 20px;
  }
`;

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
  .wrapper-bottom {
    display: flex;
  }
  .bottom-line {
    width: 100%;
    background-color: ${({ theme }) => theme.lightPurple};
    height: 1px;
    margin: 40px 10px 0 10px;
    flex: 1;
  }
`;
