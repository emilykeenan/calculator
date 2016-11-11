var numbers = {
  x: '',
  y: '',
  operator: ''
};

$(document).ready(function() {

$('.number').on('click', function() {
  var num = $(this).data('number');
  storeXY(num);
  appendDOM(numbers);
});


$('.operator').on('click', function() {
  numbers.operator = $(this).data('operator');
});

$('.equals').on('click', findOperation);

});

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

function getSubtractedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/subtract',
    success: function(data) {
      appendResult(data);
    }
  });
}

function getMultipliedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/multiply',
    success: function(data) {
      appendResult(data);
    }
  });
}

function getDividedNumbers() {
  $.ajax({
    type: 'GET',
    url: '/divide',
    success: function(data) {
      appendResult(data);
    }
  });
}

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

function storeXY(num) {
  if(numbers.operator === '') {
    numbers.x += num;
  } else {
    numbers.y += num;
  }
}

function appendDOM(numbers)  {
  $('#x').html(numbers.x);
  $('#operator').html(numbers.x);
  $('#y').html(numbers.y);
}

function appendResult(num) {
  $('#result').html(num.result);
}
