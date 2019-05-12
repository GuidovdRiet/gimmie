import React from "../node_modules/react";
import fetch from "isomorphic-unfetch";

const Index = () => {
  return (
    <div>
      <h1>Init</h1>
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
