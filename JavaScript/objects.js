// // 'c4q'[1] ==> '4';
// // [1,2,3][2] ==> 3;

// var apple1 = {quantity: 56, name: 'Gala'} //key (aka labels) : values
// var apple2 = {quantity: 99, name: 'Granny Smith'}
// var apple3 = {quantity: 99, name: 'Pink Delicious'}

// //console.log(o['quantity']); same as below
// //console.log(o.name);
// //console.log(apple3.name);

// function howManyApples(a1, a2, a3) {
//      var total = a1.quantity + a2.quantity + a3.quantity;
//      return total;
// }

// console.log('Number of apples:', howManyApples(apple1, apple2, apple3));
















// 'c4q'[1] ==> '4';
// [1,2,3][2] ==> 3;

// var apples = [{quantity: 56, name: 'Gala'}, //key (aka labels) : values
//              {quantity: 99, name: 'Granny Smith'},
//             {quantity: 99, name: 'Pink Delicious'}];

// var otherApples =  [ 
//                     {quantity: 1, name: 'Gala'}
//                 ];          

// //console.log(o['quantity']); same as below
// //console.log(o.name);
// //console.log(apple3.name);

// function howManyApples(a) {
//      var total = 0;

//     for (var i = 0; i < a.length; i++) {
//         total += a[i].quantity;
        
//     }
     
//      return total;
// }

// console.log('Number of apples:', howManyApples(apples));














// var apples = [ {
//                 quantity: 56, 
//                 name: 'Gala',
//                 price: 0.50,
//                 weight: .33
//                 }, 
//                 {
//                 quantity: 99, 
//                 name: 'Granny Smith'
//                 },
// {quantity: 99, name: 'Pink Delicious'}];

// var otherApples =  [ 
//        {quantity: 1, name: 'Gala'}
//    ];          

// //console.log(o['quantity']); same as below
// //console.log(o.name);
// //console.log(apple3.name);

// function howManyApples(a) {
// var total = 0;

// for (var i = 0; i < a.length; i++) {
// total += a[i].quantity;

// }

// return total;
// }

// console.log('Number of apples:', howManyApples(apples));












// group pair for a peusdo-AirBnB program

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cab']
    },
    {
        price: 100,
        location:'11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler']
    }
];


// // make the str as long as len(aka length)
// function padTo(str, len) {
//     if(str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else if(str.length === len) {
//         return str;
//     } else {

//        //console.log('length of str', str.length);
//       // console.log('number of spaces needed', len - str.length);
       
//         var spacesNeeded = len - str.length;
//        for (var i = 0; i < len - str.length; i++) {
//             str += ' ';       
            
//        // can use while loop instead of this code block and the one above
//        // while (str.length< len) {
//         //   str += ' ';
//        }     
//         }
//         // //console.log('length of str', str.length)

//         return str;
//     }
// }

// function whatAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         //console.log(padTo(rooms[i].location, 20).length);
//         console.log(
//             padTo(rooms[i].location, 20), 
//             '\t', // to tab the ouput
//             rooms[i].price);
//     }
// }

// whatAvailable(rooms);












// // make the str as long as len(aka length)
// function padTo(str, len) {
//     if(str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {

//         while (str.length< len) {
//             str += ' ';
//         }
//         return str;
//     }
// }

// function whatAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         //console.log(padTo(rooms[i].location, 20).length);
//         console.log(
//             padTo(rooms[i].location, 20), 
//             '\t', // to tab the ouput
//             rooms[i].price);
//     }
// }

// whatAvailable(rooms);






// make the str as long as len(aka length)
function padTo(str, len) {
    if(str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length< len) {
            str += ' ';
        }
        return str;
    }
}


//make the string as long as len
function padLeft(str, len) {
    if(str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {

        while (str.length< len) {
            str = ' ' + str;
        }
        return str;
    }
}

// this is better than adding to a function that has a diff purpose, keep purposes seperately
function toMoney(num) {
    return '$' + num.toString();
}



function whatAvailable(rooms) {
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) // when reserved the value becomes undefined which is false
            continue; //
        //console.log(padTo(rooms[i].location, 20).length);
        console.log(
            padTo(rooms[i].location, 20), 
            ' ',
            padLeft(toMoney(rooms[i]).price.toString(), 8) /* remember the number is not a string, so convert it to string*/
            ); 
    }
}



function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}


function showDetails(rooms){
    console.log('Location: ', room.location);
    console.log('Price:', toMoney(room.price)); // a good of example when func has one primary job the toMoney func
    console.log('Max.Occupancy:', room.maxOccupants);
    console.log('Amenities:', bulletPoint(room.amenities));// ( '\n - ' + room.amenities.join('\n - ')  )what if you want to reuse the bullet point system,  so make a function
}



function reserve(which) {
    rooms[which].reserved = true; // this .reversed is a property
    console.log('Thank you for reserving')
}


whatAvailable(rooms); // consider what IS available and do not show what is not available

console.log('--------------');


var selected = 2;
showDetails(rooms[selected]);


console.log('--------------');




console.log('--------------');
