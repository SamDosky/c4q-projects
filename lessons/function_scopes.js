// var myNumber

// function times3 (num) {
//     myNumber = num * 3
//     return 'hello'
// }

// console.log(myNumber)
// console.log(times3(10))
// console.log(myNumber)

//var myNumber = 2 // variable in the globe scope and can be accessed anywhere we want


// var num = 2

// function incNum() {
//     num += 10
//     return num
// }
// console.log(incNum()) //12
// console.log(incNum()) //22
// console.log(num) //22



// function incNum() {
//     var num = 2
//     num += 10
//     return num
// }
// console.log(incNum()) //12


//not considered good practice
// var num = 2

// function incNum() {
//     var num = 2
//     num += 10
//     return num
// }
// console.log(incNum())
// console.log(incNum())
// console.log(num)





// function add(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log ('numbers only please') // return 'number only please'
//     }
//     return num1 + num2
// }

// console.log(add(2, 4))




// function power(num) {
//     return Math.pow(num, 3)
// }

// console.log(power(2))


// function chicken() {
//     //call egg
//     egg()
// }

// function egg() {
//     //call chicken
//     chicken()
// }

// egg()



// function add1(num) {
//     return num + 1
// }
// function add2(num) {
//     return add1(num)  + 1
// }
// function add3(num) {
//     return add2(num) + 1
// }
// console.log(add3(3)) //6


// function larger(num1, num2) {
//     if (num1 > num2){
//         return num1
//     } else if( num1 === num2 || num1 < num2) {
//         return num2
//     } 
// }

// console.log(larger(8, 8))

