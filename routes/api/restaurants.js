const router = require('express').Router();
const Restaurant = require('../../models/restaurant');

router.get('/', (req, res, next) => {
  Restaurant.findAll()
  .then( (activities) => {
    res.send(activities);
  })
});

module.exports = router;
