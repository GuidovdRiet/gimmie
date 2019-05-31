// Components
import School from "./School";
import TreeHouse from "./TreeHouse";
import TreeSwing from "./TreeSwing";
import Picture from "./Picture";
import HousePeople from "./HousePeople";

const types = {
  treeHouse: TreeHouse,
  school: School,
  picture: Picture,
  treeSwing: TreeSwing,
  housePeople: HousePeople
};

const Illustration = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Illustration;
