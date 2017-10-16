/*
Create an array `arr3` using `map` that has all elements 
of `arr` doubled. I.e. `arr3 === [2, 4, 6]`
*/
// Array.prototype.map = function (func) {
//     var results = [];
//     for (var i = 0; i < this.length; i++) {
//         results.push(func(this[i]));
//     }

//     return results;
// };

// var arr = [1, 2, 3]
// var arr2 = arr.map(function (num) {
//     return num + 1
// })
// var arr3 = arr.map(function (num) {
//     return num * 2
// })

// console.log(arr3)




//using map
//
// Array.prototype.map = function (func) {
//     var results = [];
//     // for (var i = 0; i < this.length; i++){
//     //     results.push(func(this[i]));
//     // }
//     this.forEach(function (elem) {
//         results.push(cb(elem));
//         return results
//     })
// };

// var arr2 = []
// arr1.forEach(function (num) {
//     arr2.push(num * 2);
// });

// var arr1 = [1, 2, 3]

// var arr3 = arr.map(function (num) {
//     return num + 2;
// });
//
//







//using filter
//
// Array.prototype.filter = function(testFunc) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         if (testFunc(this[i])) {
//             results.push(this[i]);
//         }
//     }

//     return results;
// }


// var bestFilms = [];

// films.forEach(function(film) {
//     if (film.rating === 5.0) {
//         bestFilms.push(film);
//     }
// })



// var numbers = [2, 3, 4, 10, 1]
// var numbers2 = numbers.filter(function(num){
//     return num > 3
// })
// console.log(numbers2)



//
//
//using reduce
//
// Array.prototype.reduce = function(func, initialValue) {
//     var counter;
//     var accumulator;

//     // If the user didn't pass an initial value, use the first element.
//     if (initialValue === undefined) {
//         accumulator = this[0];
//     } else {
//         accumulator = initialValue;
//     }

//     // Iterate through the array, feeding the current value and the result of
//     // the previous computation back into the function 
//     for (var i = 0; i < this.length; i++) {
//         accumulator = func(accumulator, this[i])
//     }

//     return accumulator;







//
//--------------------------------
//exercises
//--------------------------------

//Q1
// var original = [1, 2, 3];

// var original2 = original.map(function(num){
//     return num + 10;
// })
// console.log(original2)



//Q2
// var original = [1, 2, 'buckle', 'my', 'shoe'];

// var original2 = original.map(function (ele) {

//     if (typeof ele !== 'string') {
//         ele = '';
//     }
//     return ele;
// })

// console.log(original2)



//Q3

// var original = [1, 2, 3, 4, 5, 6];

// var original2 = original.filter(function(ele){
//     if(ele % 2 === 0){
//         return ele
//     }
// })
// console.log(original2)



//Q4

// var original = [true, false, [], '', 0, NaN, 'kittens', 500];

// var original2 = original.filter(function (ele) {

//     if (ele) {
//         return ele
//     }

// })
// console.log(original2)




//Q5
// var arr = [1, 2, 6, 7, 100];

// var sumOfArr = arr.reduce(function(num1, num2){
// return num1 + num2

// })
// console.log(sumOfArr)



//Q6

// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];

// var arr1 = arr.filter(function(ele){
//     if(typeof ele === 'number'){
//         return ele;
//     }
// });

// var sumOfArr = arr1.reduce(function(accu, curr){
//     return accu + curr;
// })
// console.log(sumOfArr)




//Q7

// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr
//     .map(function (ele) {
//         return ele * 2
//     })
//     .reduce(function (accu, curr) {
//         return accu + curr
//     });
// console.log(sumOfArr);
// // 232



//Q8

// var arr = [1, 2, 500, 6, 3, 26];

// var largestNum = arr.reduce(function(num1, num2){
//  if(num1 > num2){
//      return num1
//  } else {
//      return num2
//  }
//  return num1
// })
// console.log(largestNum)



//Q9

// function elementDivisibleBy(divisor, arr){

//     var newArr = arr.filter(function(ele){
//         if(ele % divisor === 0){
//             return ele
//         }
//     })
//     return newArr;
// }


// console.log(elementDivisibleBy(2, [1, 2, 3, 4]));
// // [2, 4]
// console.log(elementDivisibleBy(5, [5, 25, 4, 8, 100]));
// // [5, 25, 100]




//Q10

// function joinByReduce(str, arr){



// }





//Q11


// function countZeroes()

// var array = [1,2,3,4,5,6,7,8,9,10];
// array = array.filter(function(val) {
//     return val !== 5;
//   });
//   console.log(array)





/////////

// var arrayOfArrays = [  
//                     [1, 2, 3], 
//                     [4, 5], 
//                     [6] 
//                     ];


// var result = arrayOfArrays.reduce(function(newArray, subArrays){ // first the result, then the element 
//     return newArray.concat(subArrays);
// },[]); 

// // → [1, 2, 3, 4, 5, 6]

// console.log(result)
// console.log('------------------')
// console.log(arrayOfArrays)


// function everyElem(arr, testFn){
//     var truth = arr.filter(testFn);
//     return truth.length === arr.length;
// }

// function isEven(num) {
//     return num % 2 === 0
//   }

// function isOdd(num) {
//     return num % 2 === 1
// }
  
//   console.log(everyElem([2, 4, 6], isEven));
//   // → true
//   console.log(everyElem([2, 3, 4, 6], isEven));
//   // -> false
//   console.log(everyElem([5, 7, 9], isOdd));
 
//   console.log(everyElem([2, 3, 4, 6], isOdd));






// function some(arr, testFn){
//     var truth = arr.filter(testFn);
//     return truth.length > 0 
// }

// function isEven(num) {
//     return num % 2 === 0
//   }

  
//   console.log(some([2, 4, 6], isEven));
//   // => true
//   console.log(some([3, 5, 6], isEven)); 
//   // => true 
//   console.log(some([3, 5, 7], isEven)); 
//   // => false







// function onlyUnique(arr) {
//     var result = arr.filter(function(elem, index){
//         return arr.indexOf(elem) === index
//     })
//     return result;
// }
  
// var onlyOnce = [1, 2, 3, 1, 4, 3] // => [1, 2, 3, 4]
// console.log(onlyUnique(onlyOnce))





  function getAverageAge (l) {
    return Math.floor (l.reduce(function (totalAgeSoFar, developer) {
        return totalAgeSoFar + developer.age;

      }, 0)
      / l.length
    );
  }
  console.log ([
    { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
  ]);
