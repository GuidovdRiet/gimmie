// Components
import SquareButton from './SquareButton';
import AdjustButton from './AdjustButton';

const types = {
  square: SquareButton,
  adjust: AdjustButton
};

const Button = ({ __type, ...props }) => {
  const Comp = types[__type];

  if (typeof types[__type] === 'undefined') {
    return null;
  }

  return Comp && <Comp {...props} />;
};

export default Button;
