var num1 = parseInt(prompt("Enter first no"));
var num2 = parseInt(prompt("Enter second no"));
var operater = prompt("Enter Operater");

var result = "";
if (operater == "+") {
  result = num1 + num2;
} else if (operater == "-") {
  result = num1 - num2;
} else if (operater == "/") {
  result = num1 / num2;
} else if (operater == "%") {
  result = num1 % num2;
}

alert("result = " + result);
