var muffinKey = document.getElementById('muffinCnt');
// muffinKey = parseInt(muffinTotal.innerText); Note!!! setItem/getItem will change it back to a string

function muffinChange(n) {
    var muffinCnt = Math.max(0, Number(window.localStorage.getItem(muffinKey)) + n);
    window.localStorage.setItem(muffinKey, muffinCnt);
    document
        .querySelector('#muffinCnt')
        .innerText = window.localStorage.getItem(muffinKey);
}

document
    .querySelector('#minusMuffin')
    .addEventListener('click',
    function (event) {
        muffinChange(-1);
    })

document
    .querySelector('#add5Muffins')
    .addEventListener('click',
    function (event) {
        muffinChange(+5);
    })

if (isNaN(Number(window.localStorage.getItem(muffinKey)))) {
    window.localStorage.setItem(muffinKey, 10);
}
muffinChange(0);