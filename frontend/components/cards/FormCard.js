import styled from "styled-components";
import { oneOfType, arrayOf, node, string } from "prop-types";

// Components
import Icon from "../media/Icons";

const FormCard = ({ iconType, children }) => {
  return (
    <Container>
      <Icon type={iconType} />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default FormCard;

FormCard.propTypes = {
  iconType: string.isRequired,
  children: oneOfType([arrayOf(node), node, string])
};

const Container = styled.section`
  background-color: red;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pink};
  border-radius: 40px;
  padding: 40px 35px 50px 35px;
  max-width: 750px;
  margin: 0 auto;
`;
