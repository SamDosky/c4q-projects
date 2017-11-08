// var btn = document.querySelector('#btn')
// btn.addEventListener('click', function(event){

//     function reqListener() {
//         var joke = JSON.parse(this.responseText)
//         document.querySelector('#setup').innerText = joke.setup;

//         setTimeout(function () {
//             document.querySelector('#punchline').innerText = joke.punchline;
//         }, 3000)

//         document.querySelector('#punchline').innerText = "";
//     }

//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener);
//     oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
//     oReq.send();

// })



// instructor's example 

var joke;
var lastTimer;

function showPunchLine() {
    if (joke) {
    document.querySelector('#punchline').innerText = joke.punchline;
    document.querySelector('#btn').innerText = "Make joke!!";
    joke = undefined;
    clearTimeout(lastTimer);
    }
}

function reqListener() {
    joke = JSON.parse(this.responseText)
    document.querySelector('#setup').innerText = joke.setup;
    document.querySelector('#punchline').innerText = "";
    document.querySelector('#btn').innerText = "I don't know.";
    lastTimer = setTimeout(showPunchLine, 7000)
}


document.addEventListener('DOMContentLoader', function () {
    document.querySelector('#btn').addEventListner('click', function () {
        if (joke) {
            showPunchLine();
        } else {
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
            oReq.send();
        }
    })
})