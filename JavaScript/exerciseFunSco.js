// q1       try to simplify more
// function larger(num1, num2) {
//     if (num1 > num2){
//         return num1
//     } else if( num1 === num2 || num1 < num2) { // just use else
//         return num2
//     } 
//     }
    
//     console.log(larger(8, 8))



// q2       try to simplify it more
// function getDogAge (dog_HumanAge) {
//     return dog_HumanAge * 7
//     }
    
//     console.log(getDogAge(5))



// q3 
// function calcCircumference(radius) {
//     return 2*Math.PI*radius
// }

// function calcArea(radius) {
//     return Math.PI*Math.pow(radius,2)
// } 

// function circleProps(radius) {
//     console.log("The circumference is " + calcCircumference(radius) +
//     ".")
//     console.log("The area is " + calcArea(radius) + ".")
// }
// circleProps(1) // no need to put a parenthesis around the when calling the function




//q4   try to simplify more
// function celsiusToFahrenheit(temp) {
//     return temp * 9/5 + 32
// }
// //console.log(celsiusToFahrenheit(40))

//  function fahrenheitToCelsius(temp) {
//      return (temp - 32) * 5/9 //
//  }
// //console.log(fahrenheitToCelsius(104))

// function convertTemperature(temp, string) {
//     if(string === 'C') {
//         return fahrenheitToCelsius(temp)
//     } else if(string === 'F') {
//         return celsiusToFahrenheit(temp)
//     }
// }

// console.log(convertTemperature(104, 'C'))
// console.log(convertTemperature(40, 'F'))


// q5  use variables for the doStuff to define it, it is sloppy if you don't use var
function square(num) {
    return num * num
}

function half(num) {
    return 0.5 * num
}

function percentOf(num1, num2) {
    return ((num1 / num2) * 100).toPrecision(4) + "%"
}

var Pi = 3.14
function areaOfCircle(radius){
    return Pi * (radius * radius)
}

function doStuff(num) {
    var vsquare = square(num)
    var vhalf = half(vsquare)
    var vareaOfCircle = areaOfCircle(vhalf)
    return percentOf(vsquare, vareaOfCircle) // just call the function, no need to try to assign it
}
console.log(doStuff(3))
