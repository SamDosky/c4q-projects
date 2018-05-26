//"use strict";

// function greet(name) {
//   greeting = "Hello ";
//   // ReferenceError: greeting is not defined
//   console.log(string + name)
// }

// greet('Elon')
// // this will create a global variable of greeitng even though it is unintentional especially since greeting is not a DEFINED VARIABLE




// function Person(name) {
//     this.name = name;
// }

// var p = Person("Ferdinand") // missing the 'new' keyword; this program should crash but it doesn't
// console.log(p)
// // => undefined



//
// function greet(name, name) {
//     // SyntaxError: Duplicate parameter name not allowed in this context
//     console.log("Hello " + name)
//   }

//   greet("Fred")











// "use strict";
// var assert = require("assert");
// var util = require("util");

// function Vector(x, y) {
//     this.x = x;
// }


// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// function test2(){
//     var p2 = new Vector(5, 2);

//     assert.strictEqual(p2.x, 1, "p1.x");
//     assert.strictEqual(p2.y, 2, "p1.y");
// }


// try {
//     test1();
//     test2();
// } catch (error){
//     console.log("--- Test Failed ---")
//     console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//     console.log(error.stack.split("\n")[1])
// }





// "use strict";
// var assert = require("assert");


// function Vector(x, y) {
//     this.x = x;
// }


// Vector.prototype.plus = function(other) {
//     return new Vector(this.x + other.x, this.y + other.y);
// };

// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// function test2() {
//   var p1 = new Vector(1, 2);
//   var p2 = new Vector(2, 4);
//   var p3 = p1.plus(p2);

//   assert.strictEqual(p3.x, 3, 'p3.x');
//   assert.strictEqual(p3.y, 6, 'p3.y');
// }

// var tests = [test1, test2];

// tests.forEach(function(test){
//     try {
//         test();
//     } catch (error) {
//         console.log("--- Test Failed ---")
//         console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//         console.log(error.stack.split("\n")[1])
//     }
// })







"use strict";
var assert = require("assert");

function runTests(tests) {
    var passed = 0;
    var failed = 0;

    tests.forEach(function (test) {
        try {
            console.log()
            console.log(test)
            test();             //if there is an "error", then it jumps to "catch", so it never gets to run "passed" code to increment. if there isn't an "error" it will continue the code in the whole try code block and then move back up to try to test the next testing function

            passed += 1;
        } catch (error) {

            console.log("--- Test Failed ---")
            console.log(error.message + " should be " + error.expected + " but is " + error.actual);
            console.log(error.stack.split("\n")[1])

            failed += 1;
        }
    })

    console.log()
    console.log("---Total---")
    console.log(passed + " passed")
    console.log(failed + " failed")
}

function Vector(x, y) {
    this.x = x;
    this.y = y;
}


Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function test1() {
    var p1 = new Vector(1, 2);

    assert.strictEqual(p1.x, 1, "p1.x");
    assert.strictEqual(p1.y, 2, "p1.y");
}

function test2() {
    var p1 = new Vector(1, 2);
    var p2 = new Vector(2, 4);
    var p3 = p1.plus(p2);

    assert.strictEqual(p3.x, 3, 'p3.x');
    assert.strictEqual(p3.y, 6, 'p3.y');
}

var tests = [test1, test2];

runTests(tests)

