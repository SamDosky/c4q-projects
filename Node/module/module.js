module.exports = {
    // returns the first element of the array
    first(arr) {
      return arr[0];
    }
    // returns the array minus the first item
    tail(arr) {
      return arr.slice(1);
    },
    // returns the last element of the array
    last(arr) {
      return arr[arr.length - 1]
    },
    // returns the sum of array elements
    sum(arr) {
      return arr.reduce((sum, curr) => sum + curr)
    }
  }