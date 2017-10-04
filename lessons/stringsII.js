// function XO(string){  
//     var letterX = 0
//     var letterO = 0
//     var str = string.toLowerCase()
// for(var i = 0; i <= str.length; i++) {
     
//     if (str[i] === "x" ) {
//         letterX += 1

//     } else if (str[i] === "o") {
//         letterO += 1
//     }
// }

// if(letterX === letterO){
//     return true
// } else {
//     return false
// }
// }

// console.log(XO("zpzpzzpzpp"))// the comp didnt find the x's or o's so it is the same amount


// Q2
// countVowels.includes()

// function countVowels(vowels) {
//     vowels = "a","e", "i", "o", "u";
//     var v = 0
//     var str = vowels.toLowerCase()

//     for (var i = 0; i < str.length; i++) {
//         if (vowels[i] === vowels) {

//         }
//     }
// }


// use .includes
// function countVowels(vowels) {
//     vowels = "a", "e", "i", "o", "u";
//     var v = 0
//     var str = vowels.toLowerCase()

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === vowels) {
//             return str[i]
//         }
//     }
// }
// console.log(countVowels("hello"))





// Q3
// function isPalindrome(string){
//     var j = string.length - 1
//     //console.log("racecar")
//     for (var i = 0; i < string.length / 2; i++) {
//         var str = string[i]
//     //console.log(str)
//         var strj= string[j]
//         j--
//     //console.log(strj)  
//         if(str !== strj) {
//             return false
//         } 
//     }
// return true
// }

// console.log(isPalindrome("tacocat"))







var list;
var num = 7;

function joinList(n) {
    str = ''
    for (var j = n; j >= 1; j--){
            str += j; // could put if(j<n){.. str+=','}.. str+=j
            str += ", "
        if(j === 1) {
            str += "BLAST OFF! "
        }
    }
return str;
}

console.log(joinList(8))
// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list);
// }





