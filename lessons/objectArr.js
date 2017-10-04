//Q1.... mistake did here was not using relevant keywords for variable so change recipe to ingrediants
// var favRecipe = {
//     name: 'Mole',
//     servings: 2,
//     ingredients: ['cinnamon','cumin','cocoa']
     
// };

// function listItems(recipe) {
//     var ingredientList = '\n' + recipe.ingredients.join('\n');
//    console.log('Name: ' + recipe.name);
//    console.log('Servings: ' + recipe.servings);
//    console.log('Ingredients: ' + ingredientList)
// }

// listItems(favRecipe)







//Q2
// var favRecipe = {
//     name: 'Mole',
//     servings: 2,
//     ingredients: ['cinnamon','cumin','cocoa']
     
// };

// function listItems(list) {
//     var recipe = list.ingredients.join(' > ');
//    console.log('Name: ' + list.name);
//    console.log('Servings: ' + list.servings);
//    console.log('Ingredients: ' + recipe)
// }

// listItems(favRecipe)




// //Q3
// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }

// function getProps(object){
//     arr = []
//     for(var key in object){
//         arr.push(key)
//     }
//     return arr;
// }

//   console.log(getProps(cat))
  // will return ['family', 'genus', 'species']



//Q4
/*
Write a function getObjLength that returns the length 
of an object. For this exercise, the length is the number 
of properties the object has.
*/

// var cat = 
//     {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//     }

// function getObjLength(object) {
//     var counter = 0; // when you want to start counting entries of things you need to add a counter ( name it appropriate to its purpose) so that the loop can start adding
//     for(var properties in object) {
//        counter = counter + 1
//     } 
//    return counter
// }
  
// console.log(getObjLength(cat))
  // will return 3






/*

Q5  
Create an array of films, where each film has the following properties: 
title, director, and a boolean indicating if you started watching it. 
Create a function that iterates over the array and logs the title and 
director for each film. Like this:

//Wonder Woman, directed by Patty Jenkins
//Inception, directed by Chrisopher Nolan

Now Change the output depending on whether the film was watched. 
If it was watched, log a string like

//You already watched "Wonder Woman" directed by Patty Jenkins
and if not, log

//You still need to watch "Wonder Woman" by director Patty Jenkins. 
  




var films = [
    {
        title: 'Wonder Woman',
        director: 'Patty Jenkins',
        watched: false
    },
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        watched: true
    },
    {
        title: 'It',
        director: 'Andy Muschietti',
        watched: false
    }
]

function filmWatched(arr) {
    for (var i = 0; i < arr.length; i++) { // only use for..in when the outer container is an object not when it is an array, make sure you use the appropriate loop for type of containers: objects or array

        if (arr[i].watched === true) {
            console.log ('You already watched "' + arr[i].title + '" directed by ' + arr[i].director + '.')
        } else {
            console.log('You still need to watch "' +  arr[i].title + '" directed by ' + arr[i].director + '.')        
        }
    }
}

filmWatched(films);


*/





/*

Q6

Let's put everything together by building a small todo list program. 
Here are the steps:

Decide what each //todo// task will look like: create a javascript object 
with at minimum the properties //description// and //completed//

Create a //todos// array to hold all //todo// objects.

Create a function that adds a //todo// to the //todos// array.

Create a function that shows all //todos//.

Create function that marks a //todo// as completed (based on the index number).

*/

var todoList = {
    description: 'complete exercises',
    completed: true
}

var arrToDo = [];


// create an object to push onto the array

function addToDo(arr, description, completed) {
    var todo = 
    {
        description: description,
        completed: completed
    };
    arr.push(todo)
    return arr 

}


addToDo(arrToDo,'study for exam', false )
addToDo(arrToDo,'fire the maid',true)
console.log(arrToDo)


































/*  IN CLASS PROBLEMS IN THIS BLOCK BELOW
---------------------------------------------------------------------------------------

// var favRecipe = {
//     name: 'Mole',
//     servings: 2,
//     ingredients: ['cinnamon','cumin','cocoa']  
// };

// function listItems(recipe) {
//     var ingredientList = recipe.ingredients.join(' > ');
//     console.log('Name: ' + recipe.name);
//     console.log('Servings: ' + recipe.servings);
//     console.log('Ingredients: ' + ingredientList);
// }

// listItems(favRecipe)







// var o1 = {
//     name: '0',
//     type: 'pear'
// }

// var o2 = {
//     name: '0'
//     type: 'pear'
// }
// does not equal even though they look the same inside





// var o1 = {
//     name: '0',
//     type: 'pear'
// }


// var o2 = o1;
// o2.name = '0#2'
// o1.name = '0#1'







// var o1 = {
//     name: '0',
//     type: 'pear'
// }

// function copyObject(o) {
//     var result = {};
//     for(var key in o) {
//         result[key] = o[key]   //result[key] <=== this is a setter for an object;
//     }
//     return result;
// }

//  var o2 = copyObject(o1) 

//  console.log(o1)
//  console.log(o2)
//  console.log(o1 === o2) /// are these two variable are pointing to the same object, no they not








// var o1 = {
//     name: '0',
//     type: 'pear'
// }

// o1.type = undefined //this is a setter that will delete but in background will be seen as undefined

// console.log(o1.type)
// console.log(o1)






// var person1 = {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   }

//   var person2 = {
//     age: 25,
//     firstName: 'Erika',
//     lastName: 'Kim'
//   }


// console.log(person1.age)
// console.log(person2.age)
// console.log(person1 === person2)// false
// console.log(person1.age === person2.age)//true







// var people = {
//     person1: {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   },
//     person2: {
//     age: 25,
//     firstName: 'Erika',
//     lastName: 'Kim'
//   }
// }

// // console.log(people.person1.age)
// // console.log(people.person2.age)
// // console.log(people.person1 === people.person2)// false
// // console.log(person1.age === person2.age)//true

// function ages(p){
//     for (var key in p) {
//         console.log(p[key].lastName) //p[key] (make sure to just bracket to access the inner object of an object; ) is just giving value object of person1, then person2
//     }
// }
//ages(people)

//when you want to change your lastname to married name
// people.person2.lastName = 'Kanye'

// ages(people)










// var people = {
//     person1: {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   },
//     person2: {
//     age: 25,
//     firstName: 'Jo',
//     lastName: 'Jose'
//   }
// }


// function marriage(maidenName, marriedName, p){
//     for (var key in p) {
//         if(maidenName === p[key].lastName) {
//            // p[key].maidenName = p[key].lastName .... can use this too
//             p[key].lastName = marriedName;
//             p[key].maidenName = maidenName;
            
//         }
//     }
// }

// marriage('Jose', 'Calderon', people);

// console.log(people);
*/









// function amenities(n, str) {
//     for (var i = 0; i < rooms[n].amenities[i].length; i++) { 
//         if(rooms[n].amenities[i] === str){  
//             return true
//         }     
// }}

// console.log(amenities(0, 'washer/dryer'));








// else if (inputArr[0] === 'amenities') { 
//     amenities(inputArr[1]-1, inputArr[3][0]) 