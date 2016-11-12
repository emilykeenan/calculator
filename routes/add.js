var express = require('express');
var router = express.Router();

// setting empty number variable for get request
var number = {
  result: 0
}

// addition function
function add(x, y) {
  return x + y;
}

// post request for /add, takes in object with x, y, operator and does the add function on them, then sends a success status
router.post('/', function(req, res) {
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  number.result = add(x, y);
  res.sendStatus(201);
});

// get request to send the result back to the DOM
router.get('/', function(req, res) {
  res.send(number);
});

module.exports = router;
