//  7
//option 1
const stringToNums = arr => 
    arr.map(elem => Number(elem));

//option 2
// const stringToNums = arr => 
// arr.map(Number); // Number is already a function


console.log(stringToNums(["4", "3", "9"])); //returns [4,3,9]
console.log(stringToNums(["1", "22", "7"])); //returns [1,22,7]