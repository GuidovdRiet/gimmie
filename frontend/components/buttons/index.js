// Components
import SquareButton from "./SquareButton";

const types = {
  square: SquareButton
};

const Button = ({ __type, ...props }) => {
  const Comp = types[__type];

  if (typeof types[__type] === "undefined") {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Button;
