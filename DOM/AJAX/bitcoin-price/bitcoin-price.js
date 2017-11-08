/*
function usdToBitcoin (dollars) {
    var oneUSD = 0.00014;
    return dollars * oneUSD;
}
*/


var bitcoinPrice = document.querySelector('#toBitcoin');
var usdPrice = document.querySelector('#toUSD');

bitcoinPrice.addEventListener('click', function(event) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(){
        var bitcoin = JSON.parse(this.responseText);
        var onebitCoinUSD = bitcoin.bpi.USD.rate_float;
        var input = document.querySelector('#input');
        var output= document.querySelector('#output');
        var result = Number(input.value) / onebitCoinUSD;
        output.innerText = result + " BTC";

    })
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    oReq.send();
})

usdPrice.addEventListener('click', function (event) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        var bitcoin = JSON.parse(this.responseText);
        var onebitCoinUSD = bitcoin.bpi.USD.rate_float;
        var input = document.querySelector('#input')
        var output = document.querySelector('#output')
        var result = Number(input.value) * onebitCoinUSD;
        output.innerText = "$ " + result;
    });
    oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    oReq.send();
})