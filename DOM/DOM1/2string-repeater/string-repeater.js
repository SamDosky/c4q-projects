var string = prompt("Write a string");
var numInput =  prompt("Write a number");
var num = Number(numInput)

var inputStr = string + " ";
var repeated = inputStr.repeat(num);
window.alert(repeated);