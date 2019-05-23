import { useContext, useEffect, useState } from "react";

// Context
import { UserContext } from "../components/context/UserProvider";

const useFetch = url => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    })();
  }, [url]);
  return data;
};

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

  console.log(data);

  return (
    <div>
      {loading && <div>loading ... </div>}
      {/* <p>{name}</p>
      <p>{budget}</p>
      <p>{squareFeet}</p> */}
    </div>
  );
};

export default result;
