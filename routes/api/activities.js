const router = require('express').Router();
const Activity = require('../../models/activity');

router.get('/', (req, res, next) => {
  Activity.findAll()
  .then( (activities) => {
    res.send(activities);
  })
});

module.exports = router;
