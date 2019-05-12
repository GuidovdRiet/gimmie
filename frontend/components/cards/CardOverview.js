import styled from "styled-components";

const CardOverview = ({ neighbourhood }) => {
  return (
    <Wrapper>
      <h1 id={neighbourhood.id}>{neighbourhood.name}</h1>
      <h2 id={neighbourhood.id}>{neighbourhood.area}</h2>
    </Wrapper>
  );
};

export default CardOverview;

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.pink};
  border-radius: 20px;
  min-height: 400px;
`;
