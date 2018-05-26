// var bitcoinPrice = document.querySelector('#toBitcoin');
// var usdPrice = document.querySelector('#toUSD');

// bitcoinPrice.addEventListener('click', function(event) {
//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", function(){
//         var bitcoin = JSON.parse(this.responseText);
//         var onebitCoinUSD = bitcoin.bpi.USD.rate_float;
//         var input = document.querySelector('#input');
//         var output= document.querySelector('#output');
//         var result = Number(input.value) / onebitCoinUSD;
//         output.innerText = result + " BTC";

//     })
//     oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//     oReq.send();
// })

// usdPrice.addEventListener('click', function (event) {
//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", function() {
//         var bitcoin = JSON.parse(this.responseText);
//         var onebitCoinUSD = bitcoin.bpi.USD.rate_float;
//         var input = document.querySelector('#input')
//         var output = document.querySelector('#output')
//         var result = Number(input.value) * onebitCoinUSD;
//         output.innerText = "$ " + result;
//     });
//     oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//     oReq.send();
// })



//------------
//instructor's solution

document.addEventListener("DOMContentLoaded", function () {
   Array.from (document.querySelectorAll('.convert')).map(function (element) {
        element.addEventListener('click', function (event) {

            var req = new XMLHttpRequest();
            req.addEventListener('load', function () {
                var currentPrice = JSON.parse(this.response)
                var usdRate = price_usd;
                var valueEntered = Number(document.querySelector("#num").value);

                if (event.target.id === 'usd2btc') {
                    result = 'Value of ' + valueEntered + ' USD is ' + (valueEntered / usdRate) + ' BTC'
                } else {
                    result = 'Value of ' + valueEntered + ' BTC is ' + (valueEntered * usdRate) + ' USD';
                }
                var p = document.createElement('p')
                p.innerText = result
                p.classList.add('history')
                document.querySelector('body').insertBefore(
                    p,
                    document.querySelector('.history'))
            })
            req.open("GET", "https://api.coinmarketcap.com/v1/ticker/ripple/")
            req.send();
        })
    })
})