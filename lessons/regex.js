// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / [a-zA-Z][a-zA-Z][a-zA-Z] /; // you need spaces before and after to indentify the three letter word

// console.log(text.match(pattern));
// //pattern.exec(text);// same as above


// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / [a-zA-Z]{3}[ .]/; // if the word is at the end of the sentence so it space or period

// console.log(text.match(pattern));
// //pattern.exec(text);// same as above

//word at the end
// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / \w+[ .,_-]/; 

// console.log(text.match(pattern));
// //pattern.exec(text);// same as above




//word at the end
// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = /\w+\.$/; 

// console.log(text.match(pattern));
// //pattern.exec(text);// same as above




// boundary
// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = /\b\w{3}\b/; 

// console.log(text.match(pattern));
//pattern.exec(text);// same as above

// var text = 'Luna\'s fun.'

// var pattern = /\b\w+\b/; 

// console.log(text.match(pattern));
// //pattern.exec(text);// same as above


//
// var aDefiniteArticle = /[tT]he/;

// console.log(aDefiniteArticle.test('The text does has a few numbers. 1 exactly.'));
// // -> true

// aDefiniteArticle.test('Any text can have numbers.');



//
// var aDefiniteArticle = /\b[tT]he\b/g;

// 'Make the thing do the thing. There is no try, just the done.'.replace(aDefiniteArticle, 'a');
// // -> 'Make a thing do a thing. There is no try, just a done.'



// var aWord = /\b\w+\b/g;
// 'Make the thing do the thing. There is no try, just the done.'.match(aWord);







//exercises

// 2
// using a loop to print out all 
// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
// var pattern = /\b\w{3}\b/g;

// var m;
// while (m = pattern.exec(text)){
//     console.log(m)
//     console.log()
// }


// 3 
// var text = 'txtng: the Gr8 Db8'

// var pattern = /[A-Z]/

// console.log(text.match(pattern))


// 4
// var text = 'There are 300,000,000 Americans, give or take.'

// var pattern = /[0-9,]+/

// console.log(text.match(pattern))


// 5 
// var text = 'txting: the Great Debate'

// var pattern = /[A-Z]\w+/

// console.log(text.match(pattern))



// 6  need more work

// var text = 'This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn\'t.'

// var pattern = /\b[a-fA-F0-9]+\b/g;

// console.log(text.match(pattern))


// 7
//
// var text = 'This is an example.';

// var pattern = /\b\w+\b/

// console.log(text.match(pattern))



// 8

// var text = 'This is an example.';

// var pattern = /\w+\W*$/

// console.log(text.match(pattern))



// 9

// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
// var pattern = /\d{1,2}[/]\d{1,2}[/]\d{2,4}/


// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i]
//     console.log(date.match(pattern))
// } 




// 10 

// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';

// var pattern = /(<[\a-z/]+>)/g;

// console.log(html.match(pattern))








