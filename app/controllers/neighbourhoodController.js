const mongoose = require("mongoose");

const Neighbourhood = mongoose.model("Neighbourhood");

// Helpers
const filterUndefinedFromObject = require("../helpers/filterUndefinedFromObject");
const setAllObjectValuesSortMinusOne = require("../helpers/setAllObjectValuesSortMinusOne");

exports.getAll = async (req, res) => {
  const Neighbourhoods = await Neighbourhood.find();
  if (!Neighbourhoods) {
    res.status(404).json({ error: "Page not found" });
  }
  res.status(200).json(Neighbourhoods);
};

// db.getCollection('neighbourhoods').update({ _id: ObjectId("5d18a275b70ca71614dcbe29") }, { $set: {rankPosition: 2}})
// .find({"id": { "$lt" : 12345}}).count() ;
const setNeighbourhoodRank = async ({ neighbourhoodsByData }) =>
  Promise.all(
    neighbourhoodsByData.map(async neighbourhood => {
      const neighbourhoodObj = neighbourhood.toObject();

      // Get neighbourhood total count
      const neighbourhoodTotal = await Neighbourhood.estimatedDocumentCount();

      // Find all neighbourhoods with a lower score
      const neighbourhoodsLowerThan = await Neighbourhood.find({
        rank: { $lt: neighbourhoodObj.rank }
      }).count();

      // Set de current position of the neighbourhood
      const neighbourhoodPosition = neighbourhoodsLowerThan + 1;

      // Add neighbourhoodTotal, neighbourhoodPosition to the neighbourhood
      const result = await Neighbourhood.updateOne(
        { _id: neighbourhoodObj._id },
        { $set: { neighbourhoodTotal, neighbourhoodPosition } }
      );

      return result;
    })
  );

exports.getByData = async (req, res) => {
  // Base scores, highest score for neighbourhoods
  const socialAverage = "socialAverage";
  const physicalAverage = "physicalAverage";
  const safetyAverage = "safetyAverage";
  let schoolBasis;
  let playground;

  const { greenery, budget, squareFeet, kidGirl } = req.query;

  // TEMP: set multiple values for kidGirl
  if (kidGirl !== undefined) {
    schoolBasis = "schoolBasis";
    playground = "playground";
  }

  // Limit low value input by always returning the lowest rated neighbourhood
  const WOZ = Math.ceil(Number(budget) / Number(squareFeet));
  const WOZTotal = WOZ <= 1051 ? 1051 : WOZ;

  // Create object of all query params given by user
  const obj = {
    // User data
    greenery,
    schoolBasis,
    playground,
    // Base
    socialAverage,
    physicalAverage,
    safetyAverage
  };

  // Filter all undefined values from object
  const filteredObject = filterUndefinedFromObject(obj);

  // Set all values to sort value -1 for sorting
  const dataSort = setAllObjectValuesSortMinusOne(filteredObject);

  const neighbourhoodsByData = await Neighbourhood.find({
    wozAverage: { $lte: WOZTotal }
  })
    .sort(dataSort)
    .limit(4);

  await setNeighbourhoodRank({ neighbourhoodsByData });

  res.status(200).json(neighbourhoodsByData);
};

exports.getByWOZbySquareFeed = async (req, res) => {
  const { squareFeet, budget } = req.params;
  const WOZ = Math.ceil(budget / squareFeet);
  const WOZTotal = WOZ <= 1051 ? 1051 : WOZ;

  const WOZbySquareFeed = await Neighbourhood.find({
    wozAverage: { $lte: WOZTotal }
  })
    .sort({ physicalAverage: -1, safetyAverage: -1, socialAverage: -1 })
    .limit(4);

  if (!WOZbySquareFeed) {
    res.status(404).json({ error: "Page not found" });
  }

  res.status(200).json(WOZbySquareFeed);
};

exports.getHighestSatisfaction = async (req, res) => {
  const prop = "socialAverage";
  const propOne = "physicalAverage";
  const propTwo = "physicalAverage";

  const priority = -1;
  const priorityOne = -1;
  const priorityTwo = -1;

  const neighbourhoodsHighestSatisfaction = await Neighbourhood.find({})
    .sort({
      [prop]: [priority],
      [propOne]: [priorityOne],
      [propTwo]: [priorityTwo]
    })
    .limit(4);

  if (!neighbourhoodsHighestSatisfaction) {
    res.status(404).json({ error: "Page not found" });
  }

  res.status(200).json(neighbourhoodsHighestSatisfaction);
};
