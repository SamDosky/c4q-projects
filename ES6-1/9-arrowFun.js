let arr = [2, 4, 6, 8];

const mapIt = (arr, func) => 
    arr.map(elem => func(elem))

const timesTwo = elem => elem * 2;

console.log(mapIt(arr, timesTwo));