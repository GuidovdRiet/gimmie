// Components
import School from "./School";
import TreeHouse from "./TreeHouse";
import Picture from "./Picture";

const types = {
  treeHouse: TreeHouse,
  school: School,
  picture: Picture
};

const Illustration = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Illustration;
