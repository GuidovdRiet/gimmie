import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import Icon from "../media/Icons";
import Button from "../buttons";

const FormCard = ({ iconType, children }) => {
  return (
    <Container>
      <Icon type={iconType} />
      <Wrapper>
        {children}
        <ButtonWrapper>
          <Button
            type="submit"
            __type="square"
            className="button"
            secondary
            text="Skip"
          />
          <Button
            type="submit"
            __type="square"
            className="button"
            iconType="arrow"
            text="Volgende"
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormCard;

FormCard.propTypes = {
  iconType: string.isRequired,
  children: oneOfType([arrayOf(node), node, string])
};

const Container = styled.section``;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pink};
  border-radius: 40px;
  padding: 40px 35px 50px 35px;
  max-width: 620px;
  margin: 0 auto;
  input {
    background-color: transparent;
    border: 0;
    margin-left: 7px;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 3.1rem;
    color: ${({ theme }) => theme.purple};
    opacity: 0.4;
    &::placeholder {
      color: ${({ theme }) => theme.purple};
      opacity: 0.4;
    }
    &:focus {
      outline: 0;
    }
  }
  h2 {
    color: ${({ theme }) => theme.purple};
    ${({ theme }) => theme.fontSmoothing};
    margin: 10px 0;
    line-height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  .button {
    width: 160px;
    height: 60px;
    font-size: 1.7rem;
    &:first-child {
      margin-right: 35px;
    }
  }
`;
