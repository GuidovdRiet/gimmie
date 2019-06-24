import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import Button from "../../buttons";

const InputDataCard = ({ children }) => {
  return (
    <Wrapper>
      <div className="icon-wrapper">{children}</div>
      <div className="button-wrapper">
        <Button __type="adjust" iconType="cross" iconColor="white" remove />
      </div>
    </Wrapper>
  );
};

export default InputDataCard;

InputDataCard.propTypes = {
  children: oneOfType([arrayOf(node), node, string])
};

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  .icon-wrapper {
    /* background-color: #e67e22; */
    padding-top: 81px;
    width: 100%;
    flex: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    svg {
      width: 120px;
    }
  }
  .button-wrapper {
    /* background-color: #3498db; */
    width: 100%;
    flex: 1;
    padding: 0 40px 20px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
