// //Print out who selected which character.  Two players can select the same character.
// var now = new Date()
// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//             arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }
// var arr = quadraticTime(["Agnes", "Bart", "Carl"])
// console.log(arr.length)
// var then = new Date()
// console.log(then.getTime() - now.getTime())/ 1000


// var arr = [ ['x','o','o'], 
//             ['x','x','o'], 
//             ['o','o','x']
//         ]

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//         console.log(arr[i][j])
//     }
    
// }

// 

var now = new Date()

function secondSmallest(myArr) {
    var min = myArr[0];
    var minIndex = 0;
    myArr.forEach(function(num, index) {
        if (num < min) {
            min = num;
            minIndex = index;
        }
    })

    var secondMin = min === myArr[0] ? myArr[1] : myArr[0]

    myArr.forEach(function(num, index) {
        if (num < secondMin && index !== minIndex) {
            secondMin = num;
        }
    })

    return secondMin
}

console.log(secondSmallest([12, 60, 8, 2]))
console.log(secondSmallest([25, 30, 100, 2]))
var then = new Date()
console.log(then.getTime() - now.getTime())/ 1000