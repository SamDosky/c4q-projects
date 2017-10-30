function swapList() {
    var firstId = prompt("Choose which to swap");
    var secondId = prompt("Choose which to swap");

    var firstElem = document.getElementById(firstId);
    var secondElem = document.getElementById(secondId);

    var temp = firstElem.innerText;
    firstElem.innerText = secondElem.innerText;
    secondElem.innerText = temp;
}
ƒ
swapList();