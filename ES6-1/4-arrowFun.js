//  4

const forEachSum = arr => {
    let total = 0;
    arr.forEach((val) => {
       return total += val;
    })
    return total;
}
console.log(forEachSum([1, 2, 3, 4])); //10