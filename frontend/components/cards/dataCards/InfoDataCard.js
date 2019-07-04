import styled from 'styled-components';
import { oneOfType, number, string } from 'prop-types';
import Icon from '../../media/Icons';

const InfoDataCard = ({
 score, name, icon, average 
}) => (
  <Wrapper>
    <Icon type={icon} sort="data" className="data-icon" />
    <h1 className="card-percentage">{score}</h1>
    <p className="data-type">{name}</p>
    {average && (
      <p className="data-percentage-average">
        <Icon className="icon" type="arrowSquare" />
        {average}
        <p className="data-percentage-average-info">Gemiddeld</p>
      </p>
    )}
  </Wrapper>
);

export default InfoDataCard;

InfoDataCard.propTypes = {
  score: oneOfType([number, string]),
  name: string.isRequired,
  icon: string.isRequired,
  average: string.isRequired
};

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.white};
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.bsI};
  margin-bottom: 40px;
  min-width: 354px;
  margin: 20px;
  position: relative;
  .card-percentage,
  .data-type,
  .data-percentage-average {
    margin: 0;
  }
  .data-icon {
    max-width: 80px;
    margin-bottom: 10px;
  }
  .data-type {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.lightGrey};
    font-family: ${({ theme }) => theme.secondaryFont};
    margin-top: 5px;
  }
  .data-percentage-average {
    margin-top: 15px;
    color: ${({ theme }) => theme.shamrock};
    font-weight: 100;
    font-size: 3rem;
    position: absolute;
    top: 3px;
    right: 25px;
    .icon {
      width: 22px;
      margin-right: 10px;
      fill: ${({ theme }) => theme.shamrock};
    }
    .data-percentage-average-info {
      color: ${({ theme }) => theme.lightGrey};
      font-weight: 100;
      margin-top: 5px;
    }
  }
  .card-percentage {
    font-size: 7rem;
    color: ${({ theme }) => theme.darkGrey};
    font-family: ${({ theme }) => theme.secondaryFont};
  }
`;
