// function range(min, max) {
//     var arr = [];
//     for (var i = min; i <= max; i++){
//         arr.push(i);
//     }
//     return arr;
//   }

//   function sumArr(arr){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }



// function sumOfRange(min, max){
//    //var arr = range (min, max)
//    //var sum = sumArr(arr)
//     return sumArr(range(min, max));
// }

//   console.log(sumOfRange(1, 5)); // Logs 15 (i.e. 1+2+3+4+5)



// function add1(num){
//     return num + 1;
// } 

// function add2(num){
//     return add1(num)
// }
// // console.log(add2(1))
// //console.log(add2(1))
// function add3(num) {
//     return add1(add2(num))
// }
// //console.log(add3(1))

// function add4(num) {
//     return add2(add2(num))
// }

// function add5(num) {
//     return add3(add2(num))
// }
// console.log(add5(1))
// // console.log(add4(1))


// function double(num) {
//     return num + num;
// }
// console.log(double(2))

// function square (num) {
//     return num * num;
// }
// console.log(square(4))

// function doubleSquare(num) {
//     return square(double(num))
// }
// console.log(doubleSquare(5))


//return 16



// function classyGreeting(firstName, lastName){
//     return 'Hello ' + firstName + ' ' + lastName
// }

// function yell(str){
//     return str.toUpperCase()
// }

// function yellGreeting(firstName, lastName){
//     return yell(classyGreeting(firstName,lastName))
// }

// console.log(yellGreeting('Santa', 'Claus'))




// // removeDupes([1,1,2,1,2,3,3]) // Should return [1,2,3]

// var arr1 = [1, 2, 3];
// var arr2 = [2, 3, 4];

// // removeDupes(arr1.concat(arr2))// Should return [1, 2, 3, 4]


// function removeDupes(arr) {
//     var noDupes = [];
//     for (var i = 0; i < arr.length; i++) {
//         if ( ! noDupes.includes(arr[i])) {
//             noDupes.push(arr[i]);
//         }  
//     }
//     return noDupes;
// }
// // console.log(removeDupes([1,1,2,1,2,3,3]))

// function concatAndRemoveDupes(arr1, arr2) {
//   return removeDupes(arr1.concat(arr2))
// }

// console.log(concatAndRemoveDupes(arr1, arr2)) // Should return [1, 2, 3, 4]












// function concatAndRemoveDupes(arr1, arr2) {
//     var final = [];
//     final += removeDupes(
//     return final;
// }




// var grades = [91, 85, 100, 92, 88, 100, 99]


// function sort (arr) {
//     return arr.sort(function (a, b) { 
//         return a - b 
//     })
// }
// console.log(sort(grades))

// function middleElement(arr){
//     var sum = 0 
//     return arr[Math.floor(arr.length/2)]
// }
// console.log(middleElement(grades))

// function median(arr) {
//     return (middleElement(sort(arr)))
// }

// console.log(median(grades))


/*

Given a list of grades, we can get the median grade by sorting 
the list and taking the middle element, or the average of the two 
middle elements. Create the functions sort and middleElement, and 
then use them to create the functions median.

*/





// var grades = [91, 85, 100, 92, 88, 100, 99]

// function sort(grades){
//     return grades.sort(function (a, b){ 
//         return a - b
//     }) 
// }


// function middleElement(grades) {
//     return 
// }

// function median(grades){
//     return middleElement(sort());
// }

















//CALLBACKS

// var add = function(num1, num2) {
//     return num1 + num2
// }

// //console.log(add(2, 5))

// var multiply = function (num1, num2){
//     return num1 * num2;
// }


// function callIt(arg1, arg2, callback){
//     return callback(arg1, arg2)
//   }

//   console.log(callIt(2, 4, multiply))





// var forEachElement = function(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// var logIt = function (v) {
//     console.log(v);
// }

// forEachElement([1, 'this', 'that'], logIt)

// //forEachElement([1, 'this', 'that'], console.log)

// var logsDouble = function ()


// function sayHello() {
//     console.log('hello')
// }

// setInterval(sayHello, 1000)

// can use the line below as well, it is the same as above





// setInterval(function() {
//     console.log('hello#1')
// }, 1000)

// setInterval(function() {
//     console.log('hello kitty')
// }, 1000)

// console.log(2+2)









// var spinner = '/-\\|';
// var i = 0;

// setInterval(function() {
//     console.log('\033[H' + spinner[i])
//     i = (i + 1) % spinner.length
// }, 100)





// var spinner = '/-\\|';
// var i = 0;

// setInterval(function() {
//     console.log('\x1B[H' + spinner[i])
//     i = (i + 1) % spinner.length
// }, 100)



// var spinner = ['one', 'two', 'three', 'four'];
// var i = 0;

// setInterval(function() {
//     console.log('\x1B[H' + spinner[i])
//     i = (i + 1) % spinner.length
// }, 100)






// CALLBACK EXERCISES





//#1
// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//         callback (arr[i]);
//     }
// }

// function logEachElem (arr) {
//  console.log(arr)
// }

// forEachElem([2,5, 7, 32], logEachElem);





//#2
// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }

// function logArrTypes(arr) {
//     console.log(arr + ' is a ' + typeof(arr))
// }
// forEachElem([1,'cat', true], logArrTypes)




//#3
// var i = 0;
// function addNum(num) {
//     i++;
// }

// setInterval(function(num) {   
//     addNum(num + 1);
//    console.log(i) ;
// }, 1000)




//#4
//callbacks are considered functions 
// function shouldIBuyThis(balance, callback) {
//     if (callback(balance)) {
//         console.log("Sure! I've got the money!")
//     } else {
//         console.log("Nope! Gotta keep my savings up!")
//     }
// }


// function conservativeSpender(balance) {
//     return balance > 100
// }

// function liberalSpender(balance) {
//     return balance > 10
// }

// function horribleSaver(balance) {
//     return balance > 0
// }

// // shouldIBuyThis(20, horribleSaver)
// // // logs: "Sure! I've got the money!"
// // shouldIBuyThis(20, liberalSpender)
// // // logs: "Sure! I've got the money!"
// // shouldIBuyThis(20, conservativeSpender)
// // // logs:  "Nope! Gotta keep my savings up!"
// // shouldIBuyThis(101, conservativeSpender)
// // // logs: "Sure! I've got the money!"


// function smarterShouldIBuyThis(balance, price, callback) {
//     if (callback(balance - price)) {
//         return "Sure! I've got the money";
//     } else {
//         return "Nope! Gotta keep savings up!";
//     }
// }
// console.log(smarterShouldIBuyThis(45, 50, horribleSaver)) 
// // will log "Nope! Gotta keep my savings up!"
// console.log(smarterShouldIBuyThis(100, 50, horribleSaver)) 
// // will log "Nope! Gotta keep my savings up!"









/*

@function add
@param {number} num1
@param {number} num2
@return {number} { the sum}

*/




// function map(arr, func) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var newElem = func(arr[i]);
//         newArr.push(newElem);
//     }
//     return newArr;
// }



// function multiply (num){
//     return num * 2
// }
// function add4(num) {
//     return num + 4
// }
// console.log(map([1, 2, 3], add4))
// console.log(map([1, 2, 3], multiply))

// // => [5,6,7]

