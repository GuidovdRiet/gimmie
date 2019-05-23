import { useContext } from "react";

// Context
import { UserContext } from "../components/context/UserProvider";

const result = () => {
  const { name, budget, squareFeet } = useContext(UserContext);

  return (
    <div>
      <p>{name}</p>
      <p>{budget}</p>
      <p>{squareFeet}</p>
    </div>
  );
};

result.getInitialProps = async () => {
  const res = await fetch(
    "http://localhost:7777/neighbourhoods/high-satisfaction"
  );
  const result = await res.json();

  return { result };
};

export default result;
