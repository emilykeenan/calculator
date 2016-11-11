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

function storeXY (num) {
  if(numbers.operator === '') {
    numbers.x += num;
  } else {
    numbers.y += num;
  }
}

function appendDOM (numbers) = {
  $('x').html(numbers.x);
  $('operator').html(numbers.x);
  $('y').html(numbers.y);
}
