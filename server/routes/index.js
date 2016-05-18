var express = require('express');
var router = express.Router();


router.get('/api', function (req, res) {
  res.send('Hello API!');
  console.log("Hello API!");
});

router.get('/test', function (req, res) {
  res.send('Hello Test');
  console.log("Hello TEST!");
});

module.exports = router;
