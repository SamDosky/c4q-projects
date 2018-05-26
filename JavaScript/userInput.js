// function sayHello() {
//     console.log('hello')
// }
// //setInterval(sayHello(), 1000) //we are invoking the function not giving the function

// setInterval(sayHello, 1000) // this is the correct one, call the function as a variable

// var sayHello = function(){// this is the same as above, this is longer version
//     console.log('hello')
// }




// var readline = require('readline') // readline is a module

// console.log(readline)


// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   rl.on('line', function(input) { // on is to respond to respond to events, an event is something that happens; for example, when the user presses ENTER that event happens
//     console.log(typeof input)
//     console.log('your input was: ' + input)
//   })

//   rl.on('line', function(input) { // this is an anonymous function
//     console.log('your input was: ' + input)
//   })



// rl.on('line', 'enter something', function(input) {
//     var num = Number(input)
//     console.log('your input was the number: ' + num)
//   })






//---------------------------------------------
//              EXERCISES I
//---------------------------------------------
//  Q1 [DONE]

// variables
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// // functions
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// var count = 0; 
// var str = 'Total lines: '

// //readline
// rl.on('line', function (input) {
//     var newInput = input
//     count = count + 1;
//     console.log(str + count)
// } )
// console.log("insert an input")


//------------------------------------------------
//  Q2 [DONE]

/*
Write a program that reads the user input one line at a time. 
After each input the program will log the sum of all numbers 
that the user had input. If the input is not a number the 
program will ignore it.
*/

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// rl.on('line', function (input) {
//     clear();
//     var sum = 0;
//     var inputArr = input.split(' ');
//     for (var i = 0; i < inputArr.length; i++) {
//         inputArr[i] = Number(inputArr[i]);
//         if (isNaN(inputArr[i])) {
//             return;
//         } else if (typeof inputArr[i] === 'number') {
//             inputArr[i];
//         }
//         sum += inputArr[i]
//     }

//     console.log(sum);
//     console.log("insert an input");
//     input += '\n';

// });
// console.log("insert an input");





//--------------------------------------------
//  Q3   [DONE]

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// rl.on('line', function (input) {
//     clear();
//     var sum = 0;
//     var inputArr = input.split(' ');
//     for (var i = 0; i < inputArr.length; i++) {
//         inputArr[i] = Number(inputArr[i]);
//         inputArr[i] = inputArr[i] || 0; //truthy value vs falsy value
//         if (typeof inputArr[i] === 'number') {
//             inputArr[i];
//         }
//         sum += inputArr[i];
//     }

//     console.log(sum);
//     console.log("insert an input");
//     input += '\n';

// });
// console.log("insert an input");






//------------------------------------------------

// draft
// // variables
// var readline = require('readline')

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// //functions
// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// function sumStringArr(arr){
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++){
//     var num = Number(arr[i])

//     if (!isNaN(num)){
//       sum += num;
//     }
//   }
//   return sum;
// }

// // readline, user input
// rl.on('line', function(input){
//     var inputArr = input.split(' ')
//     var sum = sumStringArr(inputArr)
//     console.log(sum)
// })







//---------------------------------------------
//                EXERCISE II
//---------------------------------------------

//Q1 [DONE]
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// var counter = 0

// rl.on('line', function (input) {
//     clear()
//     var newInput = input.toLowerCase()
//     if (newInput === "inc") {
//         counter++
//     } else if (newInput === "dec") {
//         counter -= 1
//     } else if (newInput === "res") {
//         counter = 0
//     }
//     console.log("insert 'inc', 'dec', 'res'")
//     console.log(counter)
// })

// console.log("insert 'inc', 'dec', 'res'")








//Q2

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// rl.on('line', function (input) {
//     clear()
//     var inputArr = input.split(' ');
//     var result = 0;
//     var num1 = Number(inputArr[1]);
//     var num2 = Number(inputArr[2]);

//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("invalid");
//     } else {

//         if (inputArr[0] === "+") {
//             result = num1 + num2;
//             console.log(result)
//         } else if (inputArr[0] === "-") {
//             result = num1 - num2;
//             console.log(result)
//         } else if (inputArr[0] === "*") {
//             result = num1 * num2;
//             console.log(result)
//         } else if (inputArr[0] === "/") {
//             result = num1 / num2;
//             console.log(result)
//         }
//     }

//     console.log("insert input")

// })
// console.log("insert input")








//Q3
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// rl.on('line', function (input) {
//     var inputArr = input.split(' ');
//     var result = 0;
//     var num1 = Number(inputArr[1]);
//     var num2 = Number(inputArr[2]);
//     var num3 = Number(inputArr[3]);
//     var num4 = Number(inputArr[4]);

//     if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
//         console.log("invalid");
//     } else if (_____){

//         if (inputArr[0] === "+") {
//             result = num1 + num2 + num3 + num4;
//             console.log(result)
//         } else if (inputArr[0] === "-") {
//             result = num1 - num2 - num3 - num4;
//             console.log(result)
//         } else if (inputArr[0] === "*") {
//             result = num1 * num2 * num3 * num4;
//             console.log(result)
//         } else if (inputArr[0] === "/") {
//             result = num1 / num2 / num3 / num4;
//             console.log(result)
//         }
//     }
// }
//     console.log("insert input")
// })
// console.log("insert input")









// // a way to make the operations sorter
// var operations = {
//     '+': function(a, b) { return a + b },
//     '-': function(a, b) { return a - b },
//     '*': function(a, b) { return a * b },
//     '/': function(a, b) { return a / b },
//     '**' function(a, b) { return Math.pow(a, b)}
// }






// incline decline
// var readline = require('readline')

//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   var counter = 0 
//   rl.on('line', function(input) {
//         var newInput = input.toLowerCase()
//         if (newInput === "inc"){ 
//         counter++
//         } else if ( newInput === "dec"){
//         counter -=1
//         } else if( newInput === "res"){
//              counter = 0 
//         }
//     console.log(counter)
//   })

//   console.log("insert an input")














// exercise 1 #2 
// var sum = 0;
// rl.on('line', function (input) {
//     clear()
//     var newInput = input.split(' ');
//     Number(newInput);
//     for (var i = 0; i <= newInput.length; i++) {
//         if (typeof newInput[i] === 'number') {
//             return sum += newInput[i]; 
//         }
//     }
//     console.log(sum)
//     input += '\n';
// })

// console.log("insert an input")