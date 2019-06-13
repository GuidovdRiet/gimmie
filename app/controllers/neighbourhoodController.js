const mongoose = require('mongoose');

const Neighbourhood = mongoose.model('Neighbourhood');

var geo = require('mapbox-geocoding');

geo.setAccessToken(
  'pk.eyJ1IjoiZ3VpZG92ZHJpZXQiLCJhIjoiY2p3ZGZxdDh6MDdjYjQzcGIxZmRhZHdtdSJ9._CHi3885MJVa8AY9fsIgJw'
);

exports.getAll = async (req, res) => {
  const Neighbourhoods = await Neighbourhood.find();
  if (!Neighbourhoods) {
    res.status(404).json({ error: 'Page not found' });
  }
  res.status(200).json(Neighbourhoods);
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
    res.status(404).json({ error: 'Page not found' });
  }

  res.status(200).json(WOZbySquareFeed);
};

exports.getHighestSatisfaction = async (req, res) => {
  const prop = 'socialAverage';
  const propOne = 'physicalAverage';
  const propTwo = 'physicalAverage';

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
    res.status(404).json({ error: 'Page not found' });
  }

  res.status(200).json(neighbourhoodsHighestSatisfaction);
};
