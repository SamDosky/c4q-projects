// var num = 0
// while (num <= 10) {
//   console.log('the number is: ' + num)
//   num += 2
// }


// // how does this work to get cube numbers
// var sum = 0
// for (var i = 1; i <= 10; i += 1){
//   sum += i + (i - 1) // i * 2 - 1  figure out how this works
//   console.log(sum)
// }


// for (var i = 10; i >= 0; i -= 1){
//   if (i === 0) {
//       console.log(i)
//   } else { 
//       console.log('BLAST OFF!')
//   }
// }

//THIS IS A SHORTER VERSION
// for (var i = 10; i >= 0; i -= 1){
//     console.log(i)
// }
// console.log("BLAST OFF!")


// function descending(num) {
//     for (var i = 10; i >= 0; i -= 1) {
//         console.log(i)
//     }
// }
// descending(10)

// function even (num) {
//     var i = 0
//     while(i <= num) {
//         console.log("The number " + i +  " is even")
//         i += 2
//     }
// }
// even(4)

// function odd (num) {
//     for (var i = 0; i <= num; i += 1) {
//         if(i % 2 === 1) {
//             console.log(i + " is odd")
//         }
//     } 
// }
// odd(5)



// function nine (num) {
//     var i = 1
//     while (i <= num) {
//         console.log(9 * i)
//         i += 1
//     }
// }
// nine(5)

// Q5
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }
// Q6

// for (var i = 60; i <= 100; i += 1) {
//     console.log(i, assignGrade(i))
// }
// assignGrade()
// console.log(i, num(i))


// function fizzOrBuzz() {
//     for (var i = 1; i <= 100; i += 1) {
//         if (i % 3 === 0){
//             console.log("Fizz")
//         } else if(i % 5 === 0){
//             console.log("Buzz")
//         } else {
//             console.log (i)
//         }
//     }
// }
// fizzOrBuzz()

// function fizzOrBuzz() {
//     var i = 1
//     while (i <= 100){
//         if (i % 3 === 0) {
//             console.log("Fizz")
//     }else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//             i += 1
//             }}

//             fizzOrBuzz()



//  Q7
// function fizzOrBuzz() {
//     for (var i = 1; i <= 100; i += 1) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz")
//         } else if(i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log (i)
//         }
//     }
// }
// fizzOrBuzz()


// Q8

// function bottles(){
    
//     for (var i = 99; i >= 0; i -= 1) {
    
//         if (i === 1 || i === 0) {
                
//             console.log(i + " bottle of beer on the wall, \n "  
//                         + i + " bottle of beer.\n Take one down, pass it around,\n" 
//                         + i + " No more bottle of beer on the wall.")
                
//         } else {

//             console.log(i + " bottles of beer on the wall, \n "  
//                         + i + " bottles of beer.\n Take one down, pass it around,\n" 
//                         + i + " bottles of beer on the wall.")   
//             }

//         }
    
//     }
    
// bottles()



// function bottles(){
    
//     for (var i = 99; i >= 2; i -= 1) {
    
//         if (i === 1) {
            
//             console.log(i + " bottle of beer on the wall,\n"  
//                         + (i - 1) + " bottle of beer.\n Take one down, pass it around,\n no more bottle of beer on the wall.")
        
//         } else {
            
//             console.log(i + " bottles of beer on the wall,\n"  
//                         + i + " bottles of beer.\n Take one down, pass it around,\n" 
//                         + (i - 1) + " bottles of beer on the wall.")   
//             }
    
//     }
// }
    
// bottles()




//just some changes for change sake
	