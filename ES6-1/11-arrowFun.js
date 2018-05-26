//option 1
const reduceMin = arr =>
    arr.reduce((min, num) => {
      if (min < num) {
          return min
      } else if (num < min) {
          return num
      }
    });

console.log(reduceMin([2, 3, 4, 5, 1])); //returns 1
console.log(reduceMin([6, 7, 7, 4])); //returns 4
console.log(reduceMin([10, 0, 100, 1, -100, 20, 33])); //returns -100







//---------------------------------------------------------
//option 2
// const reduceMin = arr =>
//     arr.reduce((min, num) => {
//         console.log(`min: ${min}, num: ${num}`);
//         num < min ? num : min;
//     });

// reduceMin([2, 3, 4, 5, 1]); //returns 1
// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100