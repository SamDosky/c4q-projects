// const fs = require('fs');

// fs.mkdir('folder-1', () => {
//     console.log('You created folder-1!');

//     fs.rmdir('folder-1', (err, data) => {
//         if(err) { throw err };
//         console.log('You deleted folder-1 forever!');
//     })
// })

// const makeHundred = () => {
//     const num = 100;
//     for (var i = 1; i <= num; i++) {
//         console.log(`new-folder-${num}`, () => {
//             console.log(`${i} repo made`)
//         })
//     }
// }

// const makeFolder = () => {
//     const num = 100;
//     for (var i = 1; i <= num; i++) {
//         fs.mkdir(`new-folder-${num}`, () => {
//             console.log(`${i} repo made`)
//         })
//     }
// }
// makeFolder();





const fs = require('fs');
const fileName = process.argv[2]

const makeFolder = (i) => {
  fs.mkdir(`folder-${i}`, () => {
    console.log(`${i} repo made`)
  });
}

const renameFolder = (i) => {
  fs.rename(`new-folder-${i}`, `f-${i}`, () => {
    console.log(`renamed file`)
  });
}

const deleteFolder = (i) => {
  fs.rmdir(`new-folder-${i}`, () => {
    console.log(`deleted folder`)
  });
}

const makeOneHundo = () => {
  const num = 100
  for (var i = 0; i <= num; i++) {
    makeFolder(i)
  }
}

const renameOneHundo = () => {
  const num = 100
  for (var i = 0; i <= num; i++) {
    renameFolder(i)
  }
}

const deleteOneHundo = () => {
  const num =  100;
  for (var i = 0; i <= num; i++) {
    deleteFolder(i)
  }
}