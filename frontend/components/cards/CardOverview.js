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
  padding: 40px;
  margin-bottom: 50px;
  h1,
  h2 {
    font-size: 10rem;
    line-height: 1.3;
  }
  h1 {
    color: ${({ theme }) => theme.purple};
    margin-bottom: 0;
    max-width: 1100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.purple};
    margin-top: 0px;
    color: ${({ theme }) => theme.pink};
  }
`;
