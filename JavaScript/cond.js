// var cat_count = "a"

// console.assert(typeof(cat_count === "number", "cat_count is not defined"));
// cat_count += 1
//  if (cat_count === 1) {
//     console.log('there is a single cat')
// } else if (cat_count < 1){
//     console.log('no cats')
// } else if (cat_count === 2) {
//     console.log('there are a couple of cats')
// } else if (cat_count > 1){
//     console.log('there are many cats')
// }


//count of dogs and in case ther is none, print "where is luna?"

// var count_dogs = 0;

// if(count_dogs <= 0) {
//     console.log("where is luna?")
// } 

// var dog_count = 0; // zero equals false

// if(!dog_count){
//     console.log("Where is Luna?");
// }

// var weekday = 2;

// switch (weekday) {
//     case 1:
//         console.log(Friday);
//         break;
    
//     case 2:
//         console.log(Saturday);
//         break;
        
//     case 3:
//         console.log(Sunday);
//         break;
        
//     case 4:
//         console.log(Monday);
//         break;

//     case 5:
//         console.log(Tuesday);
//         break;

//     case 6:
//         console.log(Wednesday);
//         break;

//     case 7:
//         console.log(Thursday);
//         break;

//     default:
//         break;
// }


/////// EXERCISES----------------------

//Q1

// var num1 = 10
// var num2 = 12

// if(num1 === num2) {
// console.log('They are equal.')
// } else {
// console.log('They are not equal.')
// }



/////---------------------------------

//Q2

// var num1 = 8
// var num2 = 81


// if(num1 > num2) {
// console.log("the greater number of " + num1 + " and " + num2 + " is " + num1)
// } else if (num1 === num2) {
// console.log("the numbers are equal")
// } else if( num2 > num1) {
// console.log("the greater number of " + num2 + " and " + num1 + " is " + num2)
// }



//////---------------------------------

//Q3


// var language = 'de';

// if(language === 'es') {
//    return console.log('Hola Mundo');
// } else if (language === 'de') {
//    return console.log('Hallo Welt');
// } else {
//     return console.log('Hello World');
// }




///////---------------------------------

//Q4

// var numGrade = 102;

// if(numGrade >= 90){
//     console.log('A');
// } else if (numGrade >= 80){
//     console.log('B');
// } else if (numGrade >= 70){
//     console.log('C');
// } else if (numGrade >= 60){
//     console.log('D');
// } else {
//     console.log('F');
// }


////////--------------------------------
//Q5

// var animal = 'cat';
// var num = 4;

// if (num > 1 ){
//     console.log(num + ' ' + animal + 's')
// } else {
//     console.log(num + ' ' + animal)
// }


////////---------------------------------

//Q6

// var num = 4;

// if (num % 2 === 0){
//     console.log(num + ' is an even number')
// } else {
//     console.log(num + ' is an odd number')
// }

///////----------------------------------

//Q7

var num = -16;

if(num > 0){
    console.log(num + ' is a positive number')
} else if (num === 0){
    console.log(num + ' is equal to 0')
} else if (num < 0){
    console.log(num + ' is negative number')
}