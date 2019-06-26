import { useContext, useEffect, useState, useMemo } from "react";
import BodyClassName from "react-body-classname";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

// Components
import Header from "../components/global/Header";
import Card from "../components/cards";
import { Container } from "../components/global/PageLayout";
import InputWrapper from "../components/layout/InputWrapper";

// Context
import { UserContext } from "../components/context/UserProvider";

const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const { budget, squareFeet } = useContext(UserContext);

  const queryArray = useMemo(() => {
    if (userData.length) {
      return userData.reduce((prev, current, i) => {
        const query = `${i === 0 ? "?" : "&"}${current}=${current}`;
        return prev + query;
      }, "");
    }
  }, [userData]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:7777/neighbourhoods/data?greenery=${userData[0]}`
      );
      // const res = await fetch(
      //   `http://localhost:7777/neighbourhoods/high-satisfaction/${squareFeet ||
      //     300}/${budget || 400000}`
      // );
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [budget, squareFeet, userData]);

  return (
    <>
      <Header linkBack="squarefeet" showLinkBack />
      <Container>
        {/* Set className for different background image */}
        {/* <BodyClassName className="area-svg" /> */}
        <Wrapper>
          <InputWrapper
            className="input-wrapper"
            userData={userData}
            setUserData={setUserData}
          />
          <ResultsWrapper>
            {loading && <div>loading ... </div>}
            {data &&
              data.map((neighbourhood, i) => (
                <Card
                  type="overview"
                  neighbourhood={neighbourhood}
                  key={i.toString()}
                />
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
  .input-wrapper {
    flex: 0.8;
    margin-right: 50px;
    margin-top: -70px;
  }
`;

const ResultsWrapper = styled.div`
  flex: 2;
`;
