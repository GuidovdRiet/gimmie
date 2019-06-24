// Components / cards
import OverviewCard from "./OverviewCard";
import FormCard from "./FormCard";
import DogDataCard from "./dataCards/DogDataCard";

const cards = {
  form: FormCard,
  overview: OverviewCard,
  data: {
    dog: DogDataCard
  }
};

const Card = ({ type, sort, ...props }) => {
  const Comp = sort ? cards[sort][type] : cards[type];
  if (
    sort
      ? typeof cards[sort] === "undefined" ||
        typeof cards[sort][type] === "undefined"
      : typeof cards[type] === "undefined"
  ) {
    return null;
  }
  return Comp && <Comp {...props} />;
};

export default Card;
