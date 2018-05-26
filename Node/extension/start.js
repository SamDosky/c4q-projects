const path = require("path");
const fs = require("fs");

const listOfFiles = (dirName, fileExtension) => {
  fs.readdir(dirName, (err, data) => {
    if (err) { console.log(err) }

    for (var i = 0; i < data.length; i++) {
      var fileName = data[i];
      if (path.extname(fileName) === "." + fileExtension) {
        console.log(fileName);
      }
    }
  })
}

const ext = process.argv[2];
if (!ext){
  console.log('please provide an extension')
} else {
  listOfFiles(".", ext);  
}