//REMEMBER HOW TO DO ODDS AND EVENS, ESPECIALLY ODDS
// function odd(num){
//     for(num = 0; num <= 10; num++){
//         if( num % 2 === 1 ) {
//             console.log(num)
//         }
//     }
//     return num;
// }
// odd(0);

//--------------------------------

// function descend(num){
//     for(var i = num; i >= 1; i--){
//         console.log(i)
//     }
// }
// descend(10)



//-------------------------------

// function nine (num) {
//     var i = 1
//     while (i <= num) {
//         console.log(9 * i)
//         i += 1
//     }
// }
// nine(5)

//----------or--------------

// function nine(num){
//     for(var i = 1; i <= num; i++){
//         console.log(9 * i)
//     }
// }
// nine(5)

///--------------------------------


//30
// function verbing(str) {
//     if(str.indexOf("ing") !== -1){ // -1 means it is not found
//         console.log(str += "ly")
//     } else if(str.length >= 3 ) {
//         console.log(str += "ing")
//     }
//     return str
// }
// verbing("swimm")


//---------------------------------


//31
// function getInitString(str){
//     return str.slice(str,str.length-1)

// }
// console.log(getInitString('jimmy'))

//-----------------------------------

// 33 DONE
// function capitalLast(str) {
//     return str.slice(0, -1) + str.slice(-1).toUpperCase()
// }

// console.log(capitalLast('jimmy'))

//---- OR

// function capitalLast(str) {
//     var stringWOLast = str.slice(0, -1)
//     var letterCap = str.slice(-1).toUpperCase()
//     return stringWOLast + letterCap
// }
// console.log(capitalLast('jimmy'))


///----------------------------------



//34        DONE

// function XO(str) {
//     str = str.toUpperCase()
//     var countX = 0
//     var countO = 0

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === 'X') {
//             countX += 1
//         } else if( str[i] === 'O'){
//             countO += 1
//         }
//     }

//     if(countO === countX){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(XO('ooxXOx'))



//----------------------------


// 35 
// counting vowels DONE

// function countVowels(str) {
//     var vowelsCount = 0;
//     var vowels = 'aeiou';
//     for(var i = 0; i <= str.length; i++) {
//      if(str[i] = vowels.includes(str[i])){
//             vowelsCount++
//      }
//     }
//     console.log(vowelsCount);
//   }
// countVowels("hello") // returns 2 
// countVowels("dog says woof") // returns 4
// countVowels("cat says meow") // returns 4



///--------------------------------

//36 DONE
// function isPalindrome(str) {
//     var newStr = '';
//     for(var i = str.length - 1; i >= 0; i--){
//         newStr += str[i];
//     }

//     if(str !== newStr){
//         return false;
//     }
//     return true
// }
// console.log(isPalindrome('racecar'))





///----------------------------


// finding the middle element
// function middleElement(arr) { 
//     if (arr.length % 2 === 0) { 
//       return "Oops, there's no middle" 
//     } else { 
//       return arr[Math.floor(arr.length / 2)] 
//     } 
//   }
  

var readline = require('readline')


var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function clear() {
process.stdout.write('\u001B[2J\u001B[0;0f')
}

var count = 0;
var str = 'Total lines: '

rl.on('line', function (input) {
var newInput = input
count = count + 1;
console.log(str + count)
} )
console.log("insert an input")
 