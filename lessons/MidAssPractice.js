//Q1
// function and(x, y){
//     if(x===y){
//         return true
//     } else{
//         return false
//     }
// }
// and(true, true)
// and('happy string', []);

//////simplify it like this below
// function and(x,y) {
//     return x === y;
// }
// and(true, true)
// and('happy string', []);





//Q2
// function addOnlyNumbers(foo,bar){
//     if (typeof(foo)==='number'&& typeof(bar)==='number'){
//         return foo+bar
//     }else{
//         return NaN
//     }
// }
// addOnlyNumbers(5, Math.PI)
// addOnlyNumbers('fidget spinner', 22)





//Q3
// function isAllNum(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) !== 'number'){ // this [i] is just showing its an array, not the element
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAllNum([0, 1, '2', 5]))





//Q4
// function forceAllNum (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) === 'number'){
//             arr[i] = 0;
//         } 
//     }
//     return arr;
// }
//forceAllNum([1,2,"mountain dew", 3, 4, 5, 55]);





//Q5

// function makeVowelsHyphens(s){
//     var array = s.split('');
//     var vowels = 'aeiouAEIOU';
//it would be best if we compare if the string is not a string first so it doesnt have to look for it later on
//     if(typeof(s) === 'string'){                    
//         for (var i = 0; i < array.length; i++) {
//             if(vowels.includes(array[i])){
//                 array[i] = '-';
//             }
//         }
//         return array.join('');
//     }
//return undefined; <--- we forgot to add this 
// }
// console.log(makeVowelsHyphens('Tuesday is my favorite day'));



//Q6
// var loljk = {
//     tacos: 'tacos are bomb'
// }

// function hasPropertyTacos(loljk){
//     if(loljk.tacos !== undefined){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(hasPropertyTacos({name: 'cody', tacos: 0}))





//Q7
// function hasPropertyGeneric(bigO, littleP){
//     if(bigO[littleP]){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(hasPropertyGeneric({name: 'cody', sandwich: 3}, "sandwich"))





//Q8

// function convertVowelsGeneric(str,sub){
//     var vowels = 'aeiouAEIOU';
//     var array = str.split('');
//     if (typeof(str) !== 'string' || typeof(sub) !== 'string') {
//         return undefined;
//     }

//     if (typeof(str) === 'string' && typeof(sub) === 'string') {
//         for (var i = 0; i < array.length; i++) {
//             if(vowels.includes(array[i])) {
//                 array[i] = sub;
//             }
//         }
//         return array.join('');
//     }
// }
// console.log(convertVowelsGeneric('tuesday is my favorite day', '~'))
//result t--sd-y -s f-v-r-t-











/*

Write a function oddCaps that takes one argument: str. 
If str is not of type string, return undefined, otherwise 
return a new string with the same letters as str, but with 
every odd letter capitalized.

*/


// function oddCaps(str) {
//     if (typeof str !== 'string') {
//         return undefined
//     } else {
//         newStr = ''; //this creates a new string, (you can also use an array as well)
//         for (var i = 0; i < str.length; i++) {
//             if (i % 2 === 0) {
//                 newStr += str[i];
//             } else {
//                 newStr += str[i].toUpperCase();
//             }
//         }
//         return newStr;
//     }
// }

// FIXING THE FUNCTION BELOW
// function oddCaps(str) {
//     if (typeof str !== 'string') {
//         return undefined;
//     } else {
//         var newStr = str.split('');
//         for (var i = 0; i < str.length; i++) {
//             if (i % 2 === 0) {
//                 newStr += str[i];
//             } else {
//                 newStr += str[i].toUpperCase();
//             }
//         }
//         return newStr.join();
//     }
// }


// console.log(oddCaps('giraffe'))
// // returns 'gIrAfFe'
// console.log(oddCaps(2))
// // returns undefined