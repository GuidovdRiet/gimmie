const express = require('express');

const router = express.Router();

// Controllers
const neighbourhoodController = require('../controllers/neighbourhoodController');

// Do work here
router.get('/', neighbourhoodController.getAll);
router.get('/neighbourhoods', neighbourhoodController.getAll);

// ROUTE DOES NOT EXITS
router.use('*', (req, res) => {
  res.status(404).json({
    error: 'endpoint does not exist'
  });
});

module.exports = router;
