/*
var arr = [2, 3, 5, 7, 11]
var arr2 = ['a', 'b', 'c']
var arr = ['a', 1, 'b', 5, 'zoo']

var str = arr.join(', ')
var arr2 = str.split(', ')

console.log(arr2)

var arr2 = arr.splice(2, 1, "BOO!", 'YAY')
var arr2 = arr.splice(2, 0, "BOO!", 'YAY')
var arr2 = arr.splice(2, 2, "BOO!", 'YAY')


console.log(arr.join(', ')) // adds commas and space in between with array.join()


console.log(arr)
console.log(arr2)
.splice 
.slice (start index, end but does not include it)
for (var index = 0; index < arr3.length; index++) {
    var element = arr3[index];
    console.log(element)
}

console.log(arr3)

*/


//EXERCISE ARRAY

/*

Q1

function arrLength(array) {
    counter = 0
   
    for( ; counter <= array[counter]; counter++){

        counter += (array[counter])

        if(array[counter] === undefined) {
            
            return counter
        }
    }
}
//console.log( arrLength( ['jets', 'mets', 'giants', 'yankees'] ))
console.log(arrLength([1, 2, 3, 3, 2, 1]))

// correct form
function arrLength(arr) {
    return arr.length
}

*/




/*

Q2
function longestArr(arr1, arr2) {
    var length1 = arr1.length
    var length2 = arr2.length
 
    if(length1 === length2) {
        return null
    } else if(length1 < length2) {
        return arr2
    } else if (length1 > length2) {
        return arr1
    }
}

console.log(longestArr([1, 2, 3], [1, 2, 3, 4, 5])); 
// returns [1, 2, 3, 4, 5]

console.log(longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]));
// returns ["jets", "mets", "giants", "yankees"]

*/




/*

Q3

Write a function `middleElement` that takes 
an array as an argument and returns the 
middle element of that array. If the array has an 
even number of elements, the function should 
return "Oops, there's no middle..."


function middleElement(arr) {

    if (arr.length % 2 === 0) {
        return "Oops, there is no middle.."
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
}

console.log(middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']));
// returns 'bat'

console.log(middleElement([1, 2, 3, 4, 5])); 
// returns 3

console.log(middleElement([1, "hmm", "wat", 4, 5])); 
// returns "wat"

console.log(middleElement([1, 2, 3, 4, 5, 6])); 
// returns "Oops, there's no middle"

console.log(middleElement(["john", "paul", "george", "ringo"])); 
// returns "Oops, there's no middle"

*/



/*

Q4

Write a function `sumArray` that takes as argument 
an array of numbers and returns the sum of all 
these numbers.

// for (var i = 0; i < arr.length; i++) i++ adds at the end
// var i = 0 is read at the beginnning and read once,
// after loops, the condition is constantly compared


function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
        //console.log(sum)
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]))
// returns 21

console.log(sumArray([1, 2, 3, 4, 5, -6])) 
// returns 15

*/




/*

Q5

Write a function range that takes two numbers 
as arguments: min and max. The function will 
return an array with all the numbers, inclusive, 
between min and max.


function range(min, max) {
    var arr = []

    for (var i = min; i <= max; i++) {
        arr.push(i)
    }

    return arr;
}

console.log(range(2, 6))
=> [2, 3, 4, 5, 6]


var arr = []
console.log(arr.push(arr[min] + 1))


*/













/*
    RANDOM WORK IN CLASS

// var arr1 = [1, 2, 3, 4]
// var arr2 = [1, 2, 3, 4]

// console.log(arr1 === arr2) //false

// var arr1 = [1, 2, 3, 4]
// var arr2 = arr1

// console.log(arr1 === arr2) // true



// function deepEquals(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
    
//     for (var i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             return false;
//         }   
//     }
//    return true; 
// }

// // var a1 = [1, 2, 3, 4]
// // var a2 = [1, 2, 3, 4]

// console.log(deepEquals([1, 2, 3, 4], [1, 2, 3, 4]));

// console.log(deepEquals([1, 2, 3, 5], [1, 2, 3, 4]));

// console.log(deepEquals([1, 2, 3], [1, 2, 3, 4]));

// console.log(deepEquals([1, 2, 3, 4], [1, 2, 3]));

// console.log(deepEquals(['a', 'b', 'c', 'd'], ['a', 'b', 'c', ' ']));

//console.log(deepEquals([6], [3+3]));




// var arr = [1, 2, 3]
// arr.splice(3, 0, 4, 5, 6)

// console.log(arr)
// //[ 1, 2, 3, 4, 5, 6 ]

*/







/*

Q5

function range(min, max) {
    var arr = [];

    for (var i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr;
}

console.log(range(10, 16))

*/


/*
q 6 
Write a function rangeWithStep that takes three numbers 
as arguments: min, max and step. The function will 
return and array with all the numbers, inclusive, 
between min and max, , going up in increments equal 
to step. If no step value is provided, the increment 
will be 1.



function rangeWithStep(min, max, step) {
    var arr = []
    if(typeof(step) === 'undefined') {
        step = 1
    }
    for (var i = min; i <= max; i += step) {
        arr.push(i); 
    }
    return arr;
}

console.log(rangeWithStep(4, 10, 2))
// => [4, 6, 8, 10]
console.log(rangeWithStep(4, 10))
// => [4, 5, 6, 7, 8, 9, 10]

*/






/*

q7

Write a function named `doubleTrouble` that takes in an 
array of numbers as an argument. The function should 
return a new array that doubles every number from the 
original array. 



function doubleTrouble(arr) {
    var result = []
    
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result;
}

console.log(doubleTrouble([1, 2, 3])); 
// returns [2, 4, 6]
console.log(doubleTrouble([10, 8, 5]));
// returns [20, 16, 10]

*/








//EXERCISES - ARRAYS B

/*
//Q1
 
function addTwoElements(arr, v1, v2) {
    arr.push(v1, v2)
    return arr
}

console.log(addTwoElements([1, 2, 3], 4, 5))
*/

/*
//Q2

function withoutLastTwo(arr) {
   arr.pop()
   arr.pop() //.pop() returns what was popped off; .pop() modifies the arr 
   return arr
}

console.log(withoutLastTwo(['dog', 'cat', 'bat', 'octopus']))
*/

/*
//Q3

function everyThird(arr) {
    var results = []

    for (var i = 2; i < arr.length; i += 3) {
        results.push(arr[i]) 
    }
    return results;
}

console.log(everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])); 
// returns ['c','f','i']

console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])) 
// returns [ 3, 6, 9, 12 ]

*/

/*

//Q4

function lastToFront(arr) {
    arr.unshift(arr.pop())
    return arr
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(lastToFront(arr)); 
// returns [4, 1, 2, 3]

*/