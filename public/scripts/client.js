var numbers = {
  x: '',
  y: '',
  operator: ''
};

$(document).ready(function() {
console.log('dis is working');

$('.number').on('click', function() {
  var num = $(this).data('number');
  storeXY(num);
  appendDOM(numbers);
  console.log(numbers);
});


$('.operator').on('click', function() {
  numbers.operator = $(this).data('operator');
console.log(numbers);
});

});

function postAdd() {
  $.ajax({
    type: "POST",
    url: "/add",
    success: function(data){
       appendResult(data.result);
    }
    error: function() {
      console.log('error in add ajax post request');
    }

});
}

function postSubtract() {
  $.ajax({
    type: "POST",
    url: "/subtract",
    success: function(data){
       appendResult(data.result);
    }
    error: function() {
      console.log('error in subtract ajax post request');
    }

});
}

function postMultiply() {
  $.ajax({
    type: "POST",
    url: "/multiply",
    success: function(data){
       appendResult(data.result);
    }
    error: function() {
      console.log('error in multiply ajax post request');
    }

});
}

function postDivide() {
  $.ajax({
    type: "POST",
    url: "/divide",
    success: function(data){
       appendResult(data.result);
    }
    error: function() {
      console.log('error in divide ajax post request');
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
  $('#result').html(num);
}
