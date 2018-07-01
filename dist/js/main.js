let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.menu__close');
let popupMenu = document.querySelector('.menu');


hamburger.addEventListener('click', event => {
    popupMenu.classList.toggle('is-active');
});

close.addEventListener('click', event => {
    popupMenu.classList.toggle('is-active');
});