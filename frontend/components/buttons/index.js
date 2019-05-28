// Components
import SquareButton from "./SquareButton";

const types = {
  square: SquareButton
};

const Button = ({ type, ...props }) => {
  const Comp = types[type];

  if (typeof types[type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Button;
