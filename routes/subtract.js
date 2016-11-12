var express = require('express');
var router = express.Router();

// setting empty number variable for get request
var number = {
  result: 0
}

// subtraction function
function subtract(x, y) {
  return x - y;
}

// post request for /subtract, takes in object with x, y, operator and does the subtract function on them, then sends a success status
router.post('/', function(req, res) {
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  number.result = subtract(x, y);
  console.log(number.result);
  res.sendStatus(201);
});

// get request to send the result back to the DOM
router.get('/', function(req, res) {
  res.send(number);
});

module.exports = router;
