var blurKey = 'allTheBlurb';      

var blurb = document.querySelector('#blurb');
blurb.addEventListener('click', function (event) {
    window.localStorage.setItem(blurKey, event.target.value);
});

var blurb = document.querySelector('#blurb');
blurb.value = window.localStorage.getItem(blurKey);

// var allTheBlurb = document.querySelector('#alltheblurb');
// allTheBlurb.innerText = window.localStorage.getItem(blurKey);

// var clearblurb = document.querySelector('#clearblurb')
// clearblurb.addEventListener('click', function (event) {
//     var input = document.querySelector('#blurb');
//     var allTheBlurb = document.querySelector('#alltheblurb');
//     input.value = '';
//     window.localStorage.removeItem(blurbkey) // this removes the value and removes the key
//     // window.localStorage.setItem(blurKey, '');  // this doesn't completely clear it, it just leaves an empty string or replaces with empty string; the one below completely clears out the input , new input is now undefined after the .clear() method
//     window.localStorage.clear();
//     allTheBlurb.innerText = '';
    
// });
