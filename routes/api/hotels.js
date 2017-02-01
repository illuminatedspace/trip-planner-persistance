const router = require('express').Router();
const Hotel = require('../../models/hotel');

router.get('/', (req, res, next) => {
  Hotel.findAll()
  .then( (activities) => {
    res.send(activities);
  })
});

module.exports = router;
