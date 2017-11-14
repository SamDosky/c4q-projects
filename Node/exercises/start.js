const fs = require('fs');

const fileOne = fs.writeFile('lyrics-1.txt', `Just a young gun with a quick fuse
I was uptight, wanna let loose`, (err) => {
    if(err) { throw err };
    console.log('The file-1 has been saved!');

    fs.readFile ('lyrics-1.txt', 'utf-8', (err, data) => {
        if (err) { throw err };
         console.log(`Data: ${data}`)
    });
});

const fileTwo = fs.writeFile('lyrics-2.txt', `I was dreaming of bigger things
And wanna leave my own life behind`, (err) => {
    if(err) { throw err }
    console.log('The file-2 has been saved!');

    fs.readFile ('lyrics-2.txt', 'utf-8', (err, data) => {
        if (err) { throw err };
         console.log(`Data: ${data}`)
    }); 
});

console.log(`Both lyrics: ${lyrics1}, ${lyrics2}`)