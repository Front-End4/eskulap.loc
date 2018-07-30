// let hamburger = document.querySelector('.hamburger');
// let close = document.querySelector('.menu__close');
// let popupMenu = document.querySelector('.menu');


// hamburger.addEventListener('click', event => {
//     popupMenu.classList.toggle('is-active');
// });

// close.addEventListener('click', event => {
//     popupMenu.classList.toggle('is-active');
// });


// $('.js-scroll').on('click', function (event) {
//     event.preventDefault();
//     const anchor = $(this).attr('href');
//     $(window).animate({
//         scrollTop: 0
//         },
//         '1000'
//     )
// })
var inst = $('[data-remodal-id=menu]').remodal();

var body = $('html, body');

$('.js-menu').on('click', '.menu__anchor', function(e){
    e.preventDefault();
    inst.close();
    const anchor = $(this).attr('href');
    body.animate({
        scrollTop: $(anchor)[0].offsetTop + 'px'
    }, 500, 'swing');
});

$('.js-scroll').on('click', function(e){
    e.preventDefault();
    const anchor = $(this).attr('href');
    body.animate({
        scrollTop: $(anchor)[0].offsetTop + 'px'
    }, 500, 'swing');
});