// 1. 7 days, 3 bits   B) 4 bits 

// 2. 7.442 billion, 33 bits   C) 64 bits

// 3. 83,000 k/m of roads, 17 bits   B) 32 bits

// 4. 100 billion, 80 bits   D) 128 bits




// // not mine; examples of solution for question 4
//
//
//
// function decimalToBinary(num){
//     string = ''
//     for(var i = num; i >= 0; i--){
//         if(num >= Math.pow(2,i)){
//             num = num - Math.pow(2,i)
//             string += '1'
//         } else {
//             string += '0'
//         }
//     }
//     return string
// }
// console.log(decimalToBinary(5)) 



// function decimalToBinary (num){
//     var placeValue = 1
//     var binary = ''
//     for (var i = 0; placeValue <= num; i++){
//         var digit = Math.floor(num % (2 * placeValue) / placeValue)
//         binary = digit + binary
//         placeValue = placeValue * 2
//     }
//     return binary 
// }
// console.log(decimalToBinary(64))  



// function numToBin(num) {
//     var number = num
//     var result = []
//     while(number >= 1) {
//         result.unshift(number % 2)
//         number = Math.floor(number / 2)
//     }
//     return result.join('')
// }

// console.log(numToBin(7))


// // hexadecimal
// var hexDigits = '0123456789ABCDEFGHIJKL'
// function numToHex(num, base) {
//     console.log(base <= hexDigits.length, 'Base is too big')
//     if(num === 0){
//         return '0'
//     }
//     var number = num
//     var result = []
//     while(number >= 1) {
//         result.unshift(hexDigits[number % base])
//         number = Math.floor(number / base)
//     }
//     return result.join('')
// }

// console.log(numToHex(7442000000, 2)) // 20 in base 20 is 0


// function binaryToValue(binary) {
//     var n = 0;
//     var value = 0;
//     for (var i = binary.length-1; i >= 0; i--) {
//         if (binary[i] === '1') {
//             value += (Math.pow(2, n))
//         }
//         n++;
//     }
//     return value;
// }
// console.log(binaryToValue('111'));



// function numSq (num) {
//     return Math.pow(2, num);
// }
    
// console.log(numSq(5));



//Q3
// Write a function that takes a decimal number 
//as argument and returns a string with the binary 
//representation of the number. 

function decimalToBinary(num){
    str = '';
//starts count at 8;  8 >= 0;  8 - 1 (executes after executing code block)
    for (var i = num; i >= 0; i--) { // [i] is exponents
      
       if(num >= Math.pow(2, i)) {
           num = num - Math.pow(2,i);  
            str = str + '1';
        } else {
            str = str + '0';
        }
        
    }
    return str;

}

//console.log(decimalToBinary(5)) // => "101"
console.log(decimalToBinary(8)) // => "1000"







//Q4
// Write a function that takes as argument a string 
//with the binary representation of a number, and returns 
//the decimal representation of the number (as a number).

// binaryToDecimal("101") // => 5
// binaryToDecimal("1000") // => 8






