const router = require('express').Router();
var Day = require('../../models/day');
var Hotel = require('../../models/hotel');

router.get('/', (req, res, next) => {
  Day.findAll()
  .then(function(days) {
    res.send(days);
  })
  .catch(next);

});


router.get('/:dayNum', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.dayNum
    }
  })
  .then( function(day) {
    res.send(day);
  })
  .catch(next);
});

router.post('/:dayNum', (req, res, next) => {
  console.log('starting to make a day', req.params.dayNum, req.body);
  Day.create({
    number: req.params.dayNum
  })
  .then(function(day) {
    res.status(201).send(day);
  })
  .catch(next);

});

router.post('/:dayNum/:attraction', (req, res, next) => {

  Day.findOne({
    where: {
      number: req.params.dayNum
    }
  })
  .then(function(day) {
    return Hotel.findOne({
      where: {
        id: req.body.hotelId
      }
    })
    .then(function(hotel) {
      return hotel.setDay(day);
    })
  })
  .catch(next);

});

router.delete('/:dayNum', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.dayNum
    }
  })
  .then( function(day) {
    return day.destroy();
  })
  .then(function() {
    res.end();
  })
  .catch(next);

});

router.delete('/:dayNum/:attraction', (req, res, next) => {

});

module.exports = router;
