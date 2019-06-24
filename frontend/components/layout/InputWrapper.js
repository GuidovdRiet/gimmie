import styled from "styled-components";
import { string } from "prop-types";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";
import Card from "../cards";

const InputWrapper = ({ className }) => {
  return (
    <Wrapper className={className}>
      <p className="input-title">Woonsituatie</p>
      <div className="wrapper-top">
        <Icon type="houseRounded" className="icon" sort="rounded" />
        <i className="input-line" />
        <Button
          __type="adjust"
          iconType="cross"
          iconColor="white"
          className="input-button"
        />
      </div>
      <Card type="input" sort="data">
        <Icon type="dog" sort="data" />
      </Card>
      <div className="wrapper-bottom">
        <i className="bottom-line" />
      </div>
    </Wrapper>
  );
};

export default InputWrapper;

InputWrapper.propTypes = {
  className: string
};

const Wrapper = styled.div`
  /* background-color: rgba(230, 126, 34, 0.2); */
  .input-title {
    font-size: 2.3rem;
    font-weight: 500;
    ${({ theme }) => theme.fontSmoothing};
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.highlightPurple};
    margin-top: 0;
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
