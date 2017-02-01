const router = require('express').Router();
const Restaurant = require('../../models/restaurant');

router.get('/', (req, res, next) => {
  Restaurant.findAll()
  .then( (restaurants) => {
    res.send(restaurants);
  })

});

module.exports = router;
