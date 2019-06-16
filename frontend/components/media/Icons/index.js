// Components
import Arrow from "./Arrow";
import Cross from "./Cross";
import ArrowBack from "./ArrowBack";

const types = {
  arrow: Arrow,
  cross: Cross,
  arrowBack: ArrowBack
};

const Icon = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Icon;
