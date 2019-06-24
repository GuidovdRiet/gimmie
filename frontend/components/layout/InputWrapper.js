import styled from "styled-components";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";

const InputWrapper = ({ className }) => {
  return (
    <Wrapper className={className}>
      <p>Woonsituatie</p>
      <Icon type="houseRounded" />
      <Button __type="adjust" iconType="cross" iconColor="white" remove />
    </Wrapper>
  );
};

export default InputWrapper;

const Wrapper = styled.div`
  background-color: rgba(230, 126, 34, 0.2);
`;
