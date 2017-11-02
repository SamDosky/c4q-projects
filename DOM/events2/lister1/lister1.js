function newList() {
    var input =  document.querySelector("#text")
    if (input.value) {
        let list = document.querySelector("ul");
        let newItem = document.createElement("li");
        newItem.innerText = input.value
        list.appendChild(newItem)
        input.value = "";
    }
}

var listItems = document.querySelector("ul");

listItems.addEventListener("click", function (event) {
    let target = event.target
    if (target.tagName.toUpperCase() == 'LI') {
        target.style.textDecoration = 
        target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
    }
})

let submit = document.querySelector("#submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    newList();
})

let button = document.querySelector("#button");
button.addEventListener("click", function (event) {
    var listItems = document.querySelectorAll('li')
    var list = document.querySelector('ul')
    for (var i = 0; i < listItems.length; i++){
        if(listItems[i].style.textDecoration === 'line-through'){
            list.removeChild(listItems[i])
        }
    }
})

//create function list to add a list of items
//click action on items, strickthrough or not
//add text-decoration
//manipulate the submit button, use preventDefault

