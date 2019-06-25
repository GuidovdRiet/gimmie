import { bool } from "prop-types";
import styled from "styled-components";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";
import Card from "../cards";

const DataPopup = ({ showPopup, setShowPopup }) => {
  return (
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
  );
};

export default DataPopup;

DataPopup.propTypes = {
  showPopup: bool.isRequired
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
