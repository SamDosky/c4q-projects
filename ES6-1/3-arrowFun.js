//  3
const filterEvens = arr => 
    arr.filter(elem => elem % 2 === 0)

console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
console.log(filterEvens([22,2,31,110,6,13])); //returns [22,2,110,6]