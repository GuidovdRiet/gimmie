// Components
import ArrowIcon from './ArrowIcon';
import CrossIcon from './CrossIcon';
import ArrowBackIcon from './ArrowBackIcon';
import HouseRoundedIcon from './roundedIcon/HouseRoundedIcon';

import DogDataIcon from './dataIcon/DogDataIcon';
import KidGirlDataIcon from './dataIcon/KidGirlDataIcon';
import FamilyHomeDataIcon from './dataIcon/FamilyHomeDataIcon';
import BabyDataIcon from './dataIcon/BabyDataIcon';
import BookDataIcon from './dataIcon/BookDataIcon';
import CarDataIcon from './dataIcon/CarDataIcon';
import HomeDataIcon from './dataIcon/HomeDataIcon';
import HouseHeartDataIcon from './dataIcon/HouseHeartDataIcon';
import PlateDataIcon from './dataIcon/PlateDataIcon';
import SchoolDataIcon from './dataIcon/SchoolDataIcon';
import WorkDataIcon from './dataIcon/WorkDataIcon';
import OutsiteDataIcon from './dataIcon/OutsideDataIcon';

const icons = {
  arrow: ArrowIcon,
  cross: CrossIcon,
  arrowBack: ArrowBackIcon,
  rounded: {
    houseRounded: HouseRoundedIcon
  },
  data: {
    dog: DogDataIcon,
    kidGirl: KidGirlDataIcon,
    familyHome: FamilyHomeDataIcon,
    baby: BabyDataIcon,
    book: BookDataIcon,
    car: CarDataIcon,
    home: HomeDataIcon,
    houseHeart: HouseHeartDataIcon,
    plate: PlateDataIcon,
    school: SchoolDataIcon,
    work: WorkDataIcon,
    outside: OutsiteDataIcon
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
