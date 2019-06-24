import styled from "styled-components";

const DogDataCard = () => {
  return <Wrapper>dog</Wrapper>;
};

export default DogDataCard;

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.white};
`;
