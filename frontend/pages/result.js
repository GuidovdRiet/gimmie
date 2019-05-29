import { useContext, useEffect, useState } from "react";
import BodyClassName from "react-body-classname";
import styled from "styled-components";

// Components
import Header from "../components/global/Header";
import Card from "../components/cards";
import { Container } from "../components/global/PageLayout";

// Context
import { UserContext } from "../components/context/UserProvider";

const result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { budget = 400000, squareFeet = 300 } = useContext(UserContext);

  useEffect(() => {
    if (budget && squareFeet) {
      setLoading(true);
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:7777/neighbourhoods/high-satisfaction/${squareFeet}/${budget}/`
        );
        const result = await res.json();
        setData(result);
        setLoading(false);
      };

      fetchData();
    }
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

export default result;

const Wrapper = styled.div``;
