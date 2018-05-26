

var addP = document.querySelector('#addP')
addP.addEventListener('click', function (event) {
    function reqListener() {
        var bacon = JSON.parse(this.responseText)
        var body = document.querySelector('body')
        var paragraph = document.createElement('p')

        paragraph.innerText = bacon
        document.body.appendChild(paragraph)
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem= 1");
    oReq.send();
})

