import { bool, func, array } from 'prop-types';
import styled from 'styled-components';

// Components
import Icon from '../media/Icons';
import Button from '../buttons';
import Card from '../cards';

const DataPopup = ({
 userData, showPopup, setShowPopup, setUserData 
}) => (
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
        <Card
          type="input"
          sort="data"
          className="popup-card"
          onClick={() => setUserData([...userData, 'dog'])}
        >
          <Icon type="dog" sort="data" />
        </Card>
        <Card
          type="input"
          sort="data"
          className="popup-card"
          onClick={() => setUserData([...userData, 'kidGirl'])}
        >
          <Icon type="kidGirl" sort="data" />
        </Card>
      </PopupCardWrapper>
    </div>
  </PopupContainer>
);

export default DataPopup;

DataPopup.propTypes = {
  showPopup: bool.isRequired,
  setShowPopup: func.isRequired,
  setUserData: func.isRequired,
  userData: array.isRequired
};

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(34, 2, 87, 0.9);
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
  .popup-card {
    width: 28.89%;
    margin: 20px;
    box-shadow: 0px 2px 15px rgba(28, 36, 43, 0.07);
  }
`;
