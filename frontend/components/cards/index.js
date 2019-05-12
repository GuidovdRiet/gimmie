// Components / cards
import CardOverview from "./CardOverview";

const cards = {
  overview: CardOverview
};

const Card = ({ type, ...props }) => {
  const Comp = cards[type];
  if (typeof cards[type] === "undefined") {
    return null;
  }
  return Comp && <Comp {...props} />;
};

export default Card;
