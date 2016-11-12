// setting empty object to send back to the server
var numbers = {
  x: '',
  y: '',
  operator: ''
};

$(document).ready(function() {

// event listener to get values of x and y as well as the operator on DOM
$('.number').on('click', function() {
  var num = $(this).data('number');
  storeXY(num);
  appendDOM(numbers);
});

// event listener to get operator
$('.operator').on('click', function() {
  numbers.operator = $(this).data('operator');
  appendOperator(numbers);
});

// event listener to tell the client to send numbers to the appropriate route on the server
$('.equals').on('click', findOperation);

$('.clear').on('click', clearNumbers);

});

// function to get results from the server, depending which operator was clicked
function getNumbers() {
  var operator = numbers.operator;
  switch (operator) {
    case 'add':
      getAddedNumbers();
      break;
    case 'subtract':
      getSubtractedNumbers();
      break;
    case 'multiply':
      getMultipliedNumbers();
      break;
    case 'divide':
      getDividedNumbers();
      break;
    default:

  }
}

// function to get sum of x and y from server
function getAddedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/add',
    success: function(data) {
      console.log('getting the numbers');
      appendResult(data);
    }
  });
}
// function to get difference of x and y from server
function getSubtractedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/subtract',
    success: function(data) {
      appendResult(data);
    }
  });
}

// function to get product of x and y from server
function getMultipliedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/multiply',
    success: function(data) {
      appendResult(data);
    }
  });
}

// function to get quotient of x and y from server
function getDividedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/divide',
    success: function(data) {
      appendResult(data);
    }
  });
}

// function to determine where to send the numbers object
function findOperation() {
  var operator = numbers.operator;
  switch (operator) {
    case 'add':
      addNumbers();
      break;
    case 'subtract':
      subtractNumbers();
      break;
    case 'multiply':
      multiplyNumbers();
      break;
    case 'divide':
      divideNumbers();
      break;
    default:

  }
}

// function to send numbers to the server to be added together
function addNumbers() {
  $.ajax({
    type: 'POST',
    url: '/add',
    data: numbers,
    success: function(data) {
      getNumbers();
    }
  });
}

// function to send numbers to the server to be subtracted
function subtractNumbers() {
  $.ajax({
    type: 'POST',
    url: '/subtract',
    data: numbers,
    success: function(data) {
      getNumbers();
    }
  });
}

// function to send numbers to the server to be multiplied
function multiplyNumbers() {
  $.ajax({
    type: 'POST',
    url: '/multiply',
    data: numbers,
    success: function(data) {
      getNumbers();
    }
  });
}

// function to send numbers to the server to be divided
function divideNumbers() {
  $.ajax({
    type: 'POST',
    url: '/divide',
    data: numbers,
    success: function(data) {
      getNumbers();
    }
  });
}

// function to store clicked numbers in numbers
function storeXY(num) {
  if(numbers.operator === '') {
    numbers.x += num;
  } else {
    numbers.y += num;
  }
}

// function to add numbers to DOM
function appendDOM(numbers)  {
  $('#x').html(numbers.x);
  $('#operator').html(numbers.x);
  $('#y').html(numbers.y);
}

function appendOperator(numbers) {
  switch (numbers.operator) {
    case 'add':
      $('#operation').html('+');
      break;
    case 'subtract':
      $('#operation').html('-');
      break;
    case 'multiply':
      $('#operation').html('*');
      break;
    case 'divide':
      $('#operation').html('/');
      break;
    default:

  }
}

// function to add result to DOM
function appendResult(num) {
  $('#result').html(num.result);
}

// function to clear numbers
function clearNumbers() {
  numbers.x = '';
  numbers.y = '';
  numbers.operator = '';
  appendDOM(numbers);
  $('#result').html('');
}
