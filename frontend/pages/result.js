import {
 useContext, useEffect, useState, useMemo 
} from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

// Components
import Header from '../components/global/Header';
import Card from '../components/cards';
import { Container } from '../components/global/PageLayout';
import InputWrapper from '../components/layout/InputWrapper';
import CardLoader from '../components/loaders/CardLoader';

// Context
import { UserContext } from '../components/context/UserProvider';

const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { budget, squareFeet } = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  const queryURL = useMemo(
    () => userData.reduce((prev, current) => {
        const query = `&${current}=${current}`;
        return prev + query;
      }, `https://gimmie-app.herokuapp.com/neighbourhoods/data?budget=${budget}&squareFeet=${squareFeet}`),
    [budget, squareFeet, userData]
  );

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(queryURL);
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [budget, queryURL, squareFeet, userData]);

  return (
    <>
      <Header linkBack="squarefeet" showLinkBack />
      <Container>
        <Wrapper>
          <InputWrapper
            className="result-input-wrapper"
            userData={userData}
            setUserData={setUserData}
            budget={budget}
            squareFeet={squareFeet}
          />
          <ResultsWrapper>
            {loading && (
              <LoaderWrapper>
                <CardLoader />
              </LoaderWrapper>
            )}
            {data // Check for valid result, if result is not valid 1 neighbourhood is displayed
              && data.map((neighbourhood, i) => (
                <>
                  {data.length <= 1 && (
                    // TODO: Create component
                    <div className="result-error-message">
                      <h1 className="result-error-message-text">
                        Geen geldige invoer. Pas uw budget en vierkante meters
                        aan naar een geldige invoer!{' '}
                      </h1>
                    </div>
                  )}
                  <Card
                    type="overview"
                    neighbourhood={neighbourhood}
                    key={i.toString()}
                  />
                </>
              ))}
          </ResultsWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Wrapper = styled.div`
  display: flex;
  margin-top: 130px;
  .result-input-wrapper {
    flex: 0.8;
    margin-right: 80px;
    margin-top: -70px;
  }
`;

const ResultsWrapper = styled.div`
  flex: 2;
  .result-error-message {
    color: ${({ theme }) => theme.darkPurple};
    ${({ theme }) => theme.fontSmoothing};
    background-color: ${({ theme }) => theme.geraldine};
    padding: 10px 30px;
    margin-bottom: 40px;
    h1 {
      font-weight: 200;
      font-size: 1.6rem;
      margin: 0;
      text-align: center;
    }
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
