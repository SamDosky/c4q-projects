const funStr = str => {
    let newStr = str.split(' ');
     return newStr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(funStr('the quick brown fox'));