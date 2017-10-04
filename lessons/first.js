var number_cats = Math.max(2, 1, 4);
var number_dogs = 1;

var number_animals = number_cats + number_dogs; // this is an expression
var line = "The number of animals is " + number_animals;

console.log(line); // changing how it is represented so its easier to read; this is called refactoring

number_dogs += 2;
number_cats -= 1;
number_animals = number_cats + number_dogs;
line = "The number of animals is " + number_animals;
// you don't want to redefine with var, so take off var
console.log(line);