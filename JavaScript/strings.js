// // this will write it verticle

// var txt = "Hello Monday!";

// for( var i = 0; i < txt.length; i++) { // can put (<= txt.length - 1)
//     console.log(txt[i]);
// }

// var fullName = "Carolina Restrepo ▲😊♡"; // unicode(aka, emojis) are actually made out of two characters not one like letters
// // console.log(fullName.length);

// for (var i = 0; i < fullName.length; i++) {
//     console.log(fullName[i]);
    
// }



// var firstName = "Carolina";
// var lastName = "Restrepo";
// var fullName = firstName;
// fullName += " ";
// fullName += lastName;

// console.log(fullName);





// var str = ''
// var num = 5
//  for (var i = 0; i <= num; i++) {
//     if (str !== num) {
//         str += i + ", "
//     } else {
//         str += i;
//     }
//  }
// console.log(str)

//  var str = ''
//  var num = 5
//   for (var i = 1; i < num; i++) {
//      if (str !== num) {
//          str += i + ", "
     
//         }
//   }
// str += i
// console.log(str)
// console.log( 'something else')
// console.log(str)





// var str = ''
// var num = 10
//  for (var i = 1; i <= num; i++) {
//     str += i;
//     if (i < num) {
//         str += ", "
//        }
//  }

// console.log(str)

// var str = ''
// var num = 7

// for (var i = 1; i <= num; i++){
//     str += i;
//     console.log(i + " " + str)
//     if (i < num) {
//         str += ','
//     }
// }

// var str = ''
// var num = 5

// for (var i = 1; i <= num; i ++){
//   if (i <= num) {
//     str += '#'
//   } 
//     console.log('' + str)
// }
// // broke the problem: one part building the string, part two is to list number verticle


// var list;
// var num = 7;

// function joinList(n) {
//     str = ''
//     for (var j = n; j >= 1; j--){
//             str += j; // could put if(j<n){.. str+=','}.. str+=j
//             str += ", "
//         if(j === 1) {
//             str += "BLAST OFF! "
//         }
//     }
// return str;
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list);
// }


// var name = "Andre"

// console.log(name[(name.length - 1) / 2])




// var name = "Andre"

// console.log(name[Math.floor(name.length / 2)])



// // getting two letters from the name var
// var name = "Andre"

// if( name.length % 2 === 1) { // if it odd num then get the middle
//     console.log(name[Math.ceil(name.length / 2)])
// } else {
//     console.log(name.substring(
//         name.length / 2 - 1, 
//         name.length / 2 + 1
//     ));
// }


// var str = 'My favorite number is: '
// var num = 42
// var sentence = str + num
// console.log(sentence.toUpperCase())
// console.log(sentence.toLowerCase())



// problem: var name = 'peter' // name = 'PETER' // name = PeTEr
//result to: Peter

// var name = "PeTEr" ;
// console.log(name[0].toUpperCase() + 
//             name.substring(1).toLowerCase())


// var outerWear = "T-Shirt";

// function myOutfit() {
  
//   var outerWear = "sweater";
// }

// myOutfit();
// console.log(outerWear)




// function drEvil(dollars) {
//     if ( dollars === 1000000) {
//         return dollars + " dollars (pinky)"
//     } else {
//         return dollars + " dollars"
//     }
// }

// console.log(drEvil(100))


// function verbing(str) {
//     if(str.indexOf("ing") !== -1){
//         str += "ly"
//     } else if(str.length >= 3 ) {
//         str += "ing"
//     }
//     return str
// }
// console.log(verbing("swimming"))


// function getInitString(str){
//     return str.slice(0, str.length-1)
//     }
// console.log(getInitString("Jimmy"))



// .indexOf() method






// function getLast(str) {
//     return str.slice(str.length - 1)
// }
// console.log(getLast("Jimmy"))




// function capitalLast(str) {
//    return str = str.slice(0, str.length-1) + 
//             str.slice(str.length - 1).toUpperCase()
// }
// console.log(capitalLast("Jimmy"))



// mix it Up exercise
//add the .slice() method
// function mixUp(str1, str2) {
//   str1 = str1.slice(0, 2) + str2.slice()
//   return str2.slice ()
   
// }

// console.log(mixUp("dog", "dinner"))


// function nameCase(name) {
//     var n = name.toLowerCase()      // this is bad practice ---> name = name.toLowerCase()
//     var space = name.indexOf(' ');
//     if (space !== -1){
//         return n[0].toUpperCase() //B
//         + n.slice(1, space + 1) //obby
//         + n[space + 1].toUpperCase() // F
//         + n.slice(space + 2) //lay
//     } else{
//         return n[0].toUpperCase()
//                 + n.slice(1)
//     } 
// }


// function nameCase(name) {
//     var theRest = name.toLowerCase()      // this is bad practice ---> name = name.toLowerCase()
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // "Barack "
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }

//     if(theRest) {
//         result += theRest[0].toUpperCase() + theRest.slice(1);
//     }
//     return result;
// }


// console.log(nameCase('bobby flay'));
// //Bobby Flay

// console.log(nameCase('GORDAN RAMSEY'));
// //Gordan Ramsey

// console.log(nameCase('DRE'))
// //Dre

// console.log(nameCase('dr. DRE'))
// //Dr. Dre

// console.log(nameCase('BArack hussein ObamA   '))
// //Barack Hussein Obama
// // if the string is empty for example "Barack Hussein Obama_"
// //it will break because the empty space is undefined, so it needs an if statement to identify if there is a string or not to run code