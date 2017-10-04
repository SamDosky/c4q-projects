// # # #
//  # # #
// # # #
//  # # #
// # # #
//  # # #

function makeBoard(num) {
    var board = '';
    var offset = 0;

    for (var row = 0; row < num; row++) {
        for (var column = 0; column < num; column++) {
            if(column % 2 === offset) {
                board += ' '; 
            } else {
                board += '#'
            }
        }
        board += '\n'; 
        
    }
    return board; 
}

console.log(makeBoard(8));




// function makeBoard(num) {
//     var board = ' ';
//     var character = '#';
//    for (var i  = 0; i <= num * num; i++) {
//     if() 
       
//    }
   
// }

// console.log(makeBoard(8));



// figure out a way with boolean
var board = ''
var white = ' ';
var black = '#';

function makeBoard(num) {
   for (var i  = 0; i <= num; i++) {
    if(i === !black) {
        return white
    } else {
        return black
    }
    board += "\n"
   }
   
}

console.log(makeBoard(8));