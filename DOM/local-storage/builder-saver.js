var blurKey = 'allTheBlurb';      

var appendblurb = document.querySelector('#appendblurb');
appendblurb.addEventListener('click', function (event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    allTheBlurb.innerText += ' ' + input.value;
    window.localStorage.setItem(blurKey, allTheBlurb.innerHTML);
    input.value = '';
})

var allTheBlurb = document.querySelector('#alltheblurb');
allTheBlurb.innerText = window.localStorage.getItem(blurKey);

var clearblurb = document.querySelector('#clearblurb')
clearblurb.addEventListener('click', function (event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    input.value = '';
    window.localStorage.removeItem(blurbkey) // this removes the value and removes the key
    // window.localStorage.setItem(blurKey, '');  // this doesn't completely clear it, it just leaves an empty string or replaces with empty string; the one below completely clears out the input , new input is now undefined after the .clear() method
    window.localStorage.clear();
    allTheBlurb.innerText = '';
    
});

//becareful with magic variables, not good practice, so create a variable that will easy to access if you ever need to change them, for example: var blurKey = 'allTheBlurb', this is distguishing a variable.; careful with variable names, make it unique and understandable.