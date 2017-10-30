var age = 18;
// should we be defensive here or not (down below)
// console.assert(age !== undefined && typeof(age) == 'number', "age is not a number");

if(age < 21){
    console.log("Alcohol sales is not permitted")
} else {
    console.log("Alcohol sales is permitted")
}

// 
// console.assert(typeof(age) === 'number', "age is not a number");
// console.assert(age !== undefined && 'number', "age is not a number");