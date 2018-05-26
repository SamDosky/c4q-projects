var blurKey = 'allTheBlurb';      

var blurb = document.querySelector('#blurb');
blurb.addEventListener('text') , function (event) {
    window.localStorage.setItem(blurKey, event.target.value);
});

var blurb = document.querySelector('#blurb');
blurb.value = window.localStorage.getItem(blurKey);