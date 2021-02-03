var num1 = Number(prompt("Enter first number of you choice: "));
var num2 = Number(prompt("Enter second number of you choice: "));
var operator = prompt("Enter the arithmetic operation like + , - , / , * , % you need to perform.");
var result;
if (operator === "+") {
    result = num1 + num2;
    console.log("The addition of "+num1+" and "+num2+ " is "+result.toFixed(2));
}
else if (operator === "-") {
    result = num1 - num2;
    console.log("The substraction of "+num1+" and "+num2+ " is "+result.toFixed(2));
}
else if (operator === "/") {
    result = num1 / num2;
    console.log("The divison of "+num1+" and "+num2+ " is "+result.toFixed(2));
}
else if (operator === "*") {
    result = num1 * num2;
    console.log("The multiplication of "+num1+" and "+num2+ " is "+result.toFixed(2));
}
else {
    result = num1 % num2;
    console.log("The modulus of "+num1+" and "+num2+ " is "+result);
}