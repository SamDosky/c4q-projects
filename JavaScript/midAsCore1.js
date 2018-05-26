// function oddCaps(str) {
//     if (typeof (str) !== 'string') {

//         return undefined;
//     }

//     var newStr = str.split('');

//     for (var i = 0; i < newStr.length; i++) {

//         if (i % 2 === 0) {
//             newStr[i] = newStr[i].toUpperCase();
//         }
//     }
//     return newStr.join('');
// }

// console.log(oddCaps('giraffe'))






function firstString(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            return arr[i];
        }
    } 
    return undefined;
}

console.log(firstString([1, 5, 2, 6]))
// returns undefined

console.log(firstString([3, 7, 'banana', 'kierkegaard']))
// returns 'banana'