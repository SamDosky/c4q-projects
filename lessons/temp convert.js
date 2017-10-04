var tempC = 100;
var tempF = tempC * 9/5 + 32; //instead 9/5 can be 1.8

console.log(tempC + "°C is " + tempF + "°F");

var tempF1 = 81;
var tempC1 = (tempF1 - 32) * 5/9; // is parenthesis neccessary?

console.log(tempC1 + "°F is " + tempF + "°C");

/* 
did not need to redefine variable, reuse the variable w/o var
tempF = 72;
tempC = (tempF - 32) / 1.8;

console.log(tempC + "°F is " + tempF + "°C");
*/