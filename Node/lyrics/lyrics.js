const fs = require('fs');

const lyrics1 = `Just a young gun with a quick fuse
I was uptight, wanna let loose`;

const lyrics2 = `I was dreaming of bigger things
And wanna leave my own life behind`;

fs.writeFile('lyrics-1.txt', lyrics1, (err) => {
    if (err) { throw err };
    console.log('The file-1 has been saved!');

    fs.writeFile('lyrics-2.txt', lyrics2, (err) => {
        if (err) { throw err };
        console.log('The file-2 has been saved!');

        fs.readFile('lyrics-1.txt', 'utf-8', (err, data) => {
            if (err) { throw err };
            console.log(data);

            fs.readFile('lyrics-2.txt', 'utf-8', (err, data) => {
                if (err) { throw err };
                console.log(data);

                fs.writeFile('lyrics-3.txt', `${lyrics1}\n${lyrics2}`, (err) => {
                    if(err) { throw err };
                    console.log('The file-3 has been saved!');
                });
            });
        });
    });
});