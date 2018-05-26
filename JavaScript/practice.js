//q1
// function drEvil(amount) {
//     var str = ' dollars'
//     if(amount === 1000000){
//         return amount + str + ' (pinky)'
//     } else {
//         return amount + str
//     }
// }
// console.log(drEvil(10))
// console.log(drEvil(1000000))



//q2
// function countVowels(str) {
//     for (var i = 0; i < str.length; i++) {
//         var read = str[i];
//         read++
        
//         if('aeiouAEIOI'.includes === read) {
//             return i
//         } 
        
//     }
// }
// console.log(countVowels('dog'))


//q3
// function isPalindrome(str) {
//     var j = str.length - 1

// for (var i = 0; i < str.length; i++) {
//     var string = str[i];
//     // console.log(string)
//     var strReverse = str[j]
//     j--
//     //console.log(strReverse)
//     if(string !== strReverse) {
//         return false
//    }
// } 
//    return true
// }

// console.log(isPalindrome('raceecar'))


// console.assert(isPalindrome("racecar"), "racecar is a palindrome") // returns true 
// console.assert(isPalindrome("tattarrattat"), "tattarrattat is a palindrome") // returns true 
// console.assert(isPalindrome("dog"), " dog is NOT a palindrome") // returns false

// // you cannnot use two for loops   
// function isPalindrome(word) {
//     for (var i = 0; i < (word.length- 1) / 2; i++) {
//         if(word[i] !== word[word.length - 1 - i]) {
//             return false
//         } 
//     }
//     return true
// } 

// //this is an example of unit testing 
// console.assert(isPalindrome("racecar"), "racecar is a palindrome") // returns true 
// console.assert(isPalindrome("tattarrattat"), "tattarrattat is a palindrome") // returns true 
// console.assert(!isPalindrome("dog"), " dog is NOT a palindrome") // returns false

//console.log vs console.assert 
// console.log does not tell you if the program failed right away
// console.assert you can run it with the code to find out quickly and more formal way of testing code

function isPalindrome(word) {
    for (var i = 0; i < (word.length - 1) / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.assert(!isPalindrome("ABCA"), "ABCA is NOT a palindrome");
console.assert(isPalindrome("ABBA"), "ABBA is a palindrome");
console.assert(isPalindrome("racecar"), "racecar is a palindrome");
console.assert(isPalindrome("tattarrattat"), "tattarrattat is a palindrome");
console.assert(!isPalindrome("going"), "going IS NOT a palindrome");
console.assert(isPalindrome("eye"), "eye is a palindrome");
console.assert(!isPalindrome("longer"), "longer IS NOT a palindrome");
console.assert(!isPalindrome("dog"), "dog IS NOT a plaindrome");