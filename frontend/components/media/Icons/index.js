// Components
import Arrow from "./Arrow";
import Cross from "./Cross";

const types = {
  arrow: Arrow,
  cross: Cross
};

const Icon = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Icon;
