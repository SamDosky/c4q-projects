// // var quadrant = document.getElementById('topLeft', 'topRight', 'bottomLeft', 'bottomRight');
// var topLeft = document.getElementById('topLeft');
// var topRight = document.getElementById('topRight');
// // var bottomLeft = document.getElementById('bottomLeft');
// // var bottomRight = document.getElementById('bottomRight');
// document.addEventListener('click', function(event) {
//     topLeft = event.clientX < window.innerWidth / 2 && event.clientY < window.innerHeight / 2;
//     topRight = event.clientX > window.innerWidth / 2 && event.clientY < window.innerHeight / 2;
// })  


document.addEventListener('click', function (event) {
    var t = event.target.style;
     t.backgroundColor = t.backgroundColor === 'gold' ? 'white' : 'gold';
});