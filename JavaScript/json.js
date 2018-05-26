const fs = require('fs');

var student = {  // defined an object call student
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};



fs.writeFile('students.json', JSON.stringify(students), function (err){  
    if (err) throw err;
    fs.readFile('students.json', function (err, file){
        var allStudents  = JSON.parse(file.toString())
        allStudents.push(
            {
                "name": "Sara",
                "age": 23,
                "gender": "Female",
                "department": "History",
                "car": "Honda"
            }
        )
        console.log(students.length)
        console.log(allStudents.length)
    })
});

console.log('This is after the write call');

// This is after the write call  
// Data written to file  
