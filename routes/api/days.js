const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Here\'s all the days!');
});

router.get('/:dayNum', (req, res, next) => {

});

router.post('/:dayNum', (req, res, next) => {

});

router.post('/:dayNum/:attraction', (req, res, next) => {

});

router.delete('/:dayNum', (req, res, next) => {

});

router.delete('/:dayNum/:attraction', (req, res, next) => {

});

module.exports = router;
