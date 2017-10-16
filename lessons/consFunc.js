// function Dog(name, breed, weight){
//     //this = {}
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     //return this
// }

// var charlie = new Dog("Charlie", "Mixed", 38) // the new keyword it will call the object
// console.log(charlie.name)

// //constructor objects is for creating objects
// // functions have properties such property is name

// var obj = { name: "Charlie" }
// obj()

// //an object cannot be called

// //every prototype is an empty object with the name of the function




// function Rabbit() {}

// /* default prototype
// Rabbit.prototype = { constructor: Rabbit };
// */

// console.log(Rabbit.prototype)
// console.log(Rabbit.prototype.constructor)
// console.log(Rabbit.prototype.constructor === Rabbit)




// function Rabbit(type) {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(){
//     console.log('hello')
// }
// var killerRabbit = new Rabbit('killer'); // it is not just an object, it is also a property

// killerRabbit.speak = function( ){
//     console.log('I am a rabbit')
// }

// killerRabbit.speak()
// Rabbit.prototype.speak()
//what is the constructor good for? 






// function Rabbit(type, name) {
//     this.type = type;
//     this.name = name;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log("The " + this.type + " rabbit " +
//                 this.name + " says '" + line + "'");
// };

// var killerRabbit = new Rabbit("killer", "George");
// console.log(killerRabbit instanceof Rabbit)