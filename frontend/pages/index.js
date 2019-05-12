import React from "../node_modules/react";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

// Components
import Card from "../components/cards";

const Index = ({ neighbourhoods }) => {
  return (
    <div>
      {neighbourhoods &&
        neighbourhoods.map(neighbourhood => (
          <Card
            type="overview"
            neighbourhood={neighbourhood}
            key={neighbourhood.id}
          />
        ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(
    "http://localhost:7777/neighbourhoods/high-satisfaction"
  );
  const data = await res.json();

  console.log(`Neighbourhood data fetched. Count: ${data.length}`);

  return { neighbourhoods: data };
};

export default Index;

const Title = styled.h1`
  color: red;
`;
