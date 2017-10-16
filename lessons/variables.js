// var current_year = 2020;
// var birth_year = 1995;
// var age = current_year - birth_year;
// var age2 = age - 1;

// console.log("I will be " + age2 + " or " + age + " in " + current_year);
// console.log("I will be", age - 1, "or", age, "in", current_year);




// /////----------------------

// var number_cats = Math.max(2, 1, 4);
// var number_dogs = 1;

// var number_animals = number_cats + number_dogs; // this is an expression
// var line = "The number of animals is " + number_animals;

// console.log(line); // changing how it is represented so its easier to read; this is called refactoring

// number_dogs += 2;
// number_cats -= 1;
// number_animals = number_cats + number_dogs;
// line = "The number of animals is " + number_animals;
// // you don't want to redefine with var, so take off var
// console.log(line);



// ////////--------------------



// var current_age = 10;
// var maximum_age = 20;
// var amount_snack_day = 2;
// var daysPerYear = 365;
// //add var days_per_year = 365; this would not be consider a magic number
// var yearly_snack = amount_snack_day * daysPerYear; // the 365 is a magic number
// var lifeinyears = maximum_age - current_age;

// var total = yearly_snack * lifeinyears;

// console.log(total);



// /////------------------------



// var tempC = 100;
// var tempF = tempC * 9 / 5 + 32; //instead 9/5 can be 1.8

// console.log(tempC + "°C is " + tempF + "°F");

// var tempF1 = 81;
// var tempC1 = (tempF1 - 32) * 5 / 9; // is parenthesis neccessary?

// console.log(tempF1 + "°F is " + tempC1 + "°C");

// /* 
// did not need to redefine variable, reuse the variable w/o var
// tempF = 72;
// tempC = (tempF - 32) / 1.8;

// console.log(tempC + "°F is " + tempF + "°C");
// */



//////-------------------------------



// var birthYear = 1990;
// var futureYear = 2025;
// var futureAge = futureYear - birthYear; 
// var futureAge2 = futureAge - 1;

// console.log('I will be either ' + futureAge2 + ' or ' + futureAge + ' in ' + futureYear + '.')


//////--------------------------------

// var radius = 3
// var circumference = Math.PI * (radius + radius);
// var areaofCircle = Math.PI * (radius * radius);
// console.log('The circumference is ' + circumference)
// console.log('The area is ' + areaofCircle + '.')


////------------------------------------



var tempC = 81;
var tempF = tempC * 9 / 5 + 32; 
tempC = (tempF - 32) * 5 / 9; 

console.log(tempC + "°C is " + tempF + "°F"); 
console.log(tempF + "°F is " + tempC + "°C");
