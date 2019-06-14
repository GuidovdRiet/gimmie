import { useContext, useEffect, useState } from "react";
import BodyClassName from "react-body-classname";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

// Components
import Header from "../components/global/Header";
import Card from "../components/cards";
import { Container } from "../components/global/PageLayout";

// Context
import { UserContext } from "../components/context/UserProvider";

const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { budget, squareFeet } = useContext(UserContext);

  useEffect(() => {
    console.log({ budget, squareFeet });
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:7777/neighbourhoods/high-satisfaction/${squareFeet ||
          300}/${budget || 400000}/`
      );
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [budget, squareFeet]);

  return (
    <Container>
      <Header />
      {/* Set className for different background image */}
      {loading && <div>loading ... </div>}
      <BodyClassName className="area-svg" />
      <Wrapper>
        {data &&
          data.map((neighbourhood, i) => (
            <Card
              type="overview"
              neighbourhood={neighbourhood}
              key={i.toString()}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Result;

const Wrapper = styled.div`
  #id {
    width: 400px;
    height: 500px;
  }
`;
