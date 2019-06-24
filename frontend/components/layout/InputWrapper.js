import styled from "styled-components";
import { string } from "prop-types";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";
import Card from "../cards";

const InputWrapper = ({ className }) => {
  return (
    <Wrapper className={className}>
      <p>Woonsituatie</p>
      <div className="wrapper-top">
        <Icon type="houseRounded" className="icon" sort="rounded" />
        <Button __type="adjust" iconType="cross" iconColor="white" />
      </div>
      <Card type="input" sort="data">
        <Icon type="dog" sort="data" />
      </Card>
      <div className="wrapper-bottom" />
    </Wrapper>
  );
};

export default InputWrapper;

InputWrapper.propTypes = {
  className: string
};

const Wrapper = styled.div`
  background-color: rgba(230, 126, 34, 0.2);
  .icon {
    max-width: 60px;
  }
`;
