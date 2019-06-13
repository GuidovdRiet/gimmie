import { createContext, useState } from "react";
import { oneOfType, arrayOf, node, string } from "prop-types";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setNameContext] = useState();
  const [budget, setBudgetContext] = useState();
  const [squareFeet, setSquareFeetContext] = useState();

  return (
    <UserContext.Provider
      value={{
        name,
        setNameContext,
        budget,
        setBudgetContext,
        squareFeet,
        setSquareFeetContext
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: oneOfType([arrayOf(node), node, string]).isRequired
};

export default UserProvider;
export { UserContext };
