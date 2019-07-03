import styled from 'styled-components';
import { oneOfType, number, string } from 'prop-types';
import Icon from '../../media/Icons';

const InfoDataCard = ({ score, name, icon }) => (
  <Wrapper>
    <Icon type={icon} sort="data" className="data-icon" />
    <h1 className="card-percentage">{score}</h1>
    <p className="data-type">{name}</p>
    {/* <p className="data-percentage-average">11,5</p> */}
  </Wrapper>
);

export default InfoDataCard;

InfoDataCard.propTypes = {
  score: oneOfType([number, string]),
  name: string.isRequired,
  icon: string.isRequired
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
  .card-percentage {
    font-size: 7rem;
    color: ${({ theme }) => theme.darkGrey};
    font-family: ${({ theme }) => theme.secondaryFont};
  }
`;