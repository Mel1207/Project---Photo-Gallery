const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick (e) {
    // reset the opacity of image
    imgs.forEach(img => (img.style.opacity = 1));

    // change current image to the click src
    current.scr = e.target.src;

    // add fadein class
    current.classList.add('fade-in');

    // remove the class fadein 
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // add opacity on current selected image
    e.target.style.opacity = opacity;
}