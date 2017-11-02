var blurKey = 'allTheBlurb';      

var appendblurb = document.querySelector('#appendblurb');
appendblurb.addEventListener('click', function (event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    allTheBlurb.innerHTML += ' ' + input.value;
    window.localStorage.setItem(blurKey, allTheBlurb.innerHTML);
    input.value = '';
})

var allTheBlurb = document.querySelector('#alltheblurb');
allTheBlurb.innerHTML = window.localStorage.getItem(blurKey);

//becareful with magic variables, not good practice, so create a variable that will easy to access if you ever need to change them, for example: var blurKey = 'allTheBlurb', this is distguishing a variable.; careful with variable names, make it unique and understandable.