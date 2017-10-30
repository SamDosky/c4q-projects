function updateList() {
    var id = window.prompt("Enter an id");
    
    if (document.getElementById(id) === null) { 
        alert("no id found");
    } else {
        var text = window.prompt("Enter text");
        document.getElementById(id).innerText = text;
    }
}
updateList();