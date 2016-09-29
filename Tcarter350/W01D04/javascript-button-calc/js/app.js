var form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var firstNum = parseFloat(document.getElementById('firstNum').value);
  var operator = document.getElementById('operator').value;
  var secondNum = parseFloat(document.getElementById('secondNum').value);
  var display = document.getElementById('display');

  var result = 0;

if(operator === "+") {
  result = (firstNum + secondNum);
  }
else if(operator === "-") {
  result = (firstNum - secondNum);
}

else if(operator === "*") {
  result = (firstNum * secondNum);
}

else {
  result = (firstNum / secondNum);
}
display.textContent = result;

});
