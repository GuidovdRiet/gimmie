const mongoose = require('mongoose');

const neighbourhoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  residentSatisfaction: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Neighbourhood', neighbourhoodSchema);
