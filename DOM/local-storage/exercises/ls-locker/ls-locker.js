var blurKey = 'allTheBlurb';      

var blurb = document.querySelector('#blurb');
blurb.addEventListener('click', function (event) {
    window.localStorage.setItem(blurKey, event.target.value);
});

var blurb = document.querySelector('#blurb');
blurb.value = window.localStorage.getItem(blurKey);