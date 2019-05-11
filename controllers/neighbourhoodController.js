const mongoose = require('mongoose');

const Neighbourhood = mongoose.model('Neighbourhood');

exports.getAll = async (req, res) => {
  const Neighbourhoods = await Neighbourhood.find();
  if (!Neighbourhoods) {
    res.status(404).json({ error: 'Page not found' });
  }
  res.status(200).json(Neighbourhoods);
};

exports.getHighestSatisfaction = async (req, res) => {
  const NeighbourhoodsHighestSatisfaction = await Neighbourhood.find()
    .sort({ residentSatisfaction: -1 })
    .limit(3);

  if (!NeighbourhoodsHighestSatisfaction) {
    res.status(404).json({ error: 'Page not found' });
  }

  res.status(200).json(NeighbourhoodsHighestSatisfaction);
};
