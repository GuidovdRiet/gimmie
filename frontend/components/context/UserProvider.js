import { createContext, useState } from "react";
import { oneOfType, arrayOf, node, string } from "prop-types";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setNameContext] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setNameContext
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
