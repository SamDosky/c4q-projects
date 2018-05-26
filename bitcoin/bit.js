

var text = document.querySelector('#text')
var btn = document.querySelector('#btn')
var pa = document.getElementById('p')
btn.addEventListener('click', function (event) {
    function reqListener() {
        var price = JSON.parse(this.responseText)
        con = text.value * (price.bpi.USD.rate_float)
        pa.innerText = con 
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    oReq.send();
})

