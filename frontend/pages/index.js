import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import BodyClassName from "react-body-classname";

// Components
import Card from "../components/cards";

const Index = ({ neighbourhoods }) => {
  return (
    <>
      {/* Set className for different background image */}
      <BodyClassName className="area-svg" />
      <Wrapper>
        {neighbourhoods &&
          neighbourhoods.map((neighbourhood, i) => (
            <Card
              type="overview"
              neighbourhood={neighbourhood}
              key={i.toString()}
            />
          ))}
      </Wrapper>
    </>
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

const Wrapper = styled.div``;
