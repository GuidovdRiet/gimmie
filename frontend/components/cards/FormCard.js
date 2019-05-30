import styled from "styled-components";
import { array, oneOfType, arrayOf, node, string } from "prop-types";

// Components
import Illustration from "../media/Illustrations";

const FormCard = ({ illustrationTypes, children }) => {
  return (
    <Container>
      <Wrapper>
        <IllustrationWrapper>
          {illustrationTypes &&
            illustrationTypes.map(illustrationType => (
              <Illustration type={illustrationType} />
            ))}
        </IllustrationWrapper>
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormCard;

FormCard.propTypes = {
  illustrationTypes: array,
  children: oneOfType([arrayOf(node), node, string])
};

const Container = styled.section``;

const IllustrationWrapper = styled.div`
  display: flex;
  svg {
    width: 90px;
    height: 90px;
    margin-right: 15px;
  }
`;

const ChildWrapper = styled.div`
  margin: 33px 0 0;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pink};
  border-radius: 40px;
  padding: 40px 35px 50px 35px;
  max-width: 620px;
  margin: 0 auto;
  .form-error {
    color: ${({ theme }) => theme.purple};
  }
  input {
    background-color: transparent;
    border: 0;
    margin-left: 7px;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 3.1rem;
    color: ${({ theme }) => theme.purple};
    opacity: 0.4;
    font-weight: 200;
    &::placeholder {
      color: ${({ theme }) => theme.purple};
      opacity: 0.4;
      font-weight: 200;
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
    font-weight: 200;
  }
`;
