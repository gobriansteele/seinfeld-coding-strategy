var express = require('express');
var router = express.Router();
var characters = require('./characters');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('testing home page');
});
// define the about route
router.use('/characters', characters);

router.param('id', function(req, res, next, id) {
  console.log(id);
  res.end();
});

router.get('/:id', function(req, res) {
  console.log(req.params.id);
  res.send('received');
});

module.exports = router;
