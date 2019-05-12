import React from "../node_modules/react";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Index = () => {
  return (
    <div>
      <Title>Init</Title>
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
