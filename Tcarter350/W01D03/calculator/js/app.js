/*Basic Calculator

Must be able to +, -, / and *
Must take user input using prompt
Must be able display the result using alert
Should use a loop!
Should handle floats*/
var newCalc = "Y";

while (newCalc === "Y") {

var result;

var whatLevel = prompt("Hi, this is a Calculator. Do you wish to find the square root of a number? If so, please press (T). If you wish to comtinue with a different operation, please press (U)")

if (whatLevel === "T") {
  var advanced = prompt("Please choose just ONE number that you would like to find the square root of");
  alert(Math.sqrt(advanced));
  newCalc = prompt("would you like to go for round 2?!!! Y for yes, N for no");
}

else {

var calculation = prompt("Choose: A(addition), S(subtraction), D(divide), M(multiply), P(to find the power of)");
console.log('calculation:', calculation);

var firstNumber = prompt("please give your first number");
console.log('you chose', firstNumber);

var secondNumber = prompt("please give your  second number");
console.log('you chose', secondNumber);


// convert strings to numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (calculation === "A") {
  // handles addition between two numbers
  result = firstNumber + secondNumber;
  alert("this is your answer: " + result);
}

else if (calculation === "S") {
  result = firstNumber - secondNumber;
  alert("this is your answer:" + result);
}

else if (calculation === "D") {
  result = firstNumber / secondNumber;
  alert("this is your answer:" + result);
}

else if (calculation === "M")   {
  result = firstNumber  * secondNumber;
  alert("this is your answer:" + result);
  }

  else {
    result = Math.pow(firstNumber, secondNumber); {
    alert("this is your answer:" + result);
  }
}

newCalc = prompt("would you like to go for round 2?!!! Y for yes, N for no");

    }
}
