var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

function arrayInsert(a1, a2, where) {
    for (var i = 0; i < a2.length; i++) {
        a1.splice(where + 1, 0, a2[i])
    }

}

arrayInsert(arr1, arr2, arr1.length)

console.log(arr1)