//     var body = document.querySelector('body');
//     document.addEventListener('click', function(event) {
//         if( event.clientX < window.innerWidth / 2 ) {
//             body.style.backgroundColor = 'mediumaquamarine';
//         } else { 
//             body.style.backgroundColor = 'peachpuff';
//         }
//     })


//easier to read, less lines of code
var body = document.querySelector('body');
document.addEventListener('click', function(event) {
    var isLeftside = event.clientX < window.innerWidth / 2; 
    body.style.backgroundColor = isLeftside ? 'mediumaquamarine' : 'peachpuff';
    
})