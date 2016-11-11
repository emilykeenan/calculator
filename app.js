var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// routing modules
var index = require('./routes/index');
var add = require('./routes/add');
var subtract = require('./routes/subtract');
var divide = require('./routes/divide');
var multiply = require('./routes/multiply');

app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/add', add);
app.use('/subtract', subtract);
app.use('/divide', divide);
app.use('/multiply', multiply);

// static files
app.use('/', index);

// set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('The server is listening on port ' + app.get('port'));
});
