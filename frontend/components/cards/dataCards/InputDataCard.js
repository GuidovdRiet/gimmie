import styled from 'styled-components';
import {
 oneOfType, arrayOf, node, string, func 
} from 'prop-types';

// Components
import Button from '../../buttons';

const InputDataCard = ({
 className, onClick, buttonType, children 
}) => (
  <Wrapper className={className}>
    <div className="icon-wrapper">{children}</div>
    <div className="button-wrapper">
      <Button
        __type="adjust"
        iconType="cross"
        iconColor="white"
        remove={buttonType}
        onClick={onClick}
      />
    </div>
  </Wrapper>
);

export default InputDataCard;

InputDataCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  onClick: func,
  className: string,
  buttonType: string
};

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.white};
  min-height: 325px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.bsI};
  .icon-wrapper {
    padding-top: 81px;
    flex: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    svg {
      width: 120px;
    }
  }
  .button-wrapper {
    flex: 1;
    padding: 0 40px 20px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
