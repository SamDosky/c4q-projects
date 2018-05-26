const countOddsAndEvens = arr => {
  arr.reduce((acc, num) => {

    if (num % 2 === 0) {
      return {
        evens: acc.evens + 1,
        odds: acc.odds
      }
    } else if (num % 2 === 1) {
      return {
        evens: acc.evens,
        odds: acc.odds + 1
      }
    }
  }, { odds: 0, evens: 0 })
}

console.log(countOddsAndEvens([11, 2, 36, 4, 15]));
// returns {odds: 2, evens: 3}
// console.log(countOddsAndEvens([1, 2, 3, 4, 5, 5, 99, 101]));
// // returns {odds: 6, evens: 2}