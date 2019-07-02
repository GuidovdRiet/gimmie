// Components / cards
import OverviewCard from './OverviewCard';
import FormCard from './FormCard';
import InputDataCard from './dataCards/InputDataCard';

const cards = {
  form: FormCard,
  overview: OverviewCard,
  data: {
    input: InputDataCard
  }
};

const Card = ({ type, sort, ...props }) => {
  const Comp = sort ? cards[sort][type] : cards[type];
  if (
    sort
      ? typeof cards[sort] === 'undefined'
        || typeof cards[sort][type] === 'undefined'
      : typeof cards[type] === 'undefined'
  ) {
    return null;
  }
  return Comp && <Comp {...props} />;
};

export default Card;
