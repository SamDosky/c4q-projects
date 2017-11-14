const fs = require('fs');


// fs.readFile('words.txt', 'utf8', function(err, data) {
//     console.log(`error: ${err}`)
//     console.log(`data: ${data}`)
// });


//creating a new file with a message inside the file
// fs.writeFile('message.txt', 'Hello Node.js', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('The file has been saved!');
// });


//reading data that is inside the file.
// fs.readFile('message.txt', 'utf8', function (err, data) {
//     if (err) { throw err };
//     console.log(`data: ${data}`)
// });


//read what is in your directory/folder
// fs.readdir('.', (err, data) => {
//     if(err) {
//         console.log('Error!', err);
//     }
//     console.log(data);
// });


//making a new folder
// fs.mkdir('another-new-repo', () => {
//     console.log('Created another repo!')
// });


// fs.watch('filename.txt', (eventType, filename) => {
//     console.log(eventType + ' in ' + filename)
// });


// using variable to define a file and passing it to the readFile
// var filename = process.argv[2];
// fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) { throw err };
//     console.log(`Data: ${data}`)
// });
