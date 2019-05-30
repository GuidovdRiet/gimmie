// Components
import Arrow from "./Arrow";

const types = {
  arrow: Arrow
};

const Icon = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Icon;
