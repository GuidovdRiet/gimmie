// Components
import School from "./School";
import TreeHouse from "./TreeHouse";

const types = {
  treeHouse: TreeHouse,
  school: School
};

const Illustration = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Illustration;
