import styled from 'styled-components';

const TextDataCard = ({ children }) => <Wrapper>{children}</Wrapper>;

export default TextDataCard;

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.white};
  min-height: 325px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.bsI};
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  h2 {
    font-size: 6rem;
    margin: 0;
    color: ${({ theme }) => theme.darkGrey};
    line-height: 30px;
    line-height: 50px;
    font-weight: 700;
  }
  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.lightGrey};
  }
`;
