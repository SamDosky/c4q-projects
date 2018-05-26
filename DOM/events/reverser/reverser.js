document.addEventListener("DOMContentLoaded", function (event) {
    // get to form (use a variable) to then grab the sumbit button
    var form = document.querySelector('form')   
    form.addEventListener("submit", function (event) {
        // use value to receive the string in the input box
        var input = document.getElementById("input").value;
        // grab p to display the reverse input answer
        var p = document.querySelector('p');
        p.innerText = input.split('').reverse().join('');
        event.preventDefault();
    })
})