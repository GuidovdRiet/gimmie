// Components
import ArrowIcon from './ArrowIcon';
import CrossIcon from './CrossIcon';
import ArrowBackIcon from './ArrowBackIcon';
import HouseRoundedIcon from './roundedIcon/HouseRoundedIcon';

import DogDataIcon from './dataIcon/DogDataIcon';
import KidGirlDataIcon from './dataIcon/KidGirlDataIcon';

const icons = {
  arrow: ArrowIcon,
  cross: CrossIcon,
  arrowBack: ArrowBackIcon,
  rounded: {
    houseRounded: HouseRoundedIcon
  },
  data: {
    dog: DogDataIcon,
    kidGirl: KidGirlDataIcon
  }
};

const Icon = ({ type, sort, ...props }) => {
  const Comp = sort ? icons[sort][type] : icons[type];
  if (
    sort
      ? typeof icons[sort] === 'undefined'
        || typeof icons[sort][type] === 'undefined'
      : typeof icons[type] === 'undefined'
  ) {
    return null;
  }
  return Comp && <Comp {...props} />;
};

export default Icon;
