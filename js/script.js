$(function () {
//slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },

            460: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            925: {
                items: 5,
                nav: false,
                loop: true
            }
        },
        autoPlay: false,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    });
//end slider

//scroll menu items
    $('#scroll_remore').on('click', function (e) {
        e.preventDefault();
        var pos2 = $('.product ').offset().top;


        $('body,html').animate({scrollTop: pos2}, 500);
    });
    $('#plugIn').on('click', function (e) {
        e.preventDefault();
        var pos1 = $('.product').offset().top;


        $('body,html').animate({scrollTop: pos1}, 500);
    });
    $('#scroll_portfolio').on('click', function (e) {
        e.preventDefault();
        var pos = $('#portfolio').offset().top;


        $('body,html').animate({scrollTop: pos}, 500);
    });
    $('#scroll_aboutUs').on('click', function (e) {
        e.preventDefault();
        var pos = $('#aboutUs').offset().top;


        $('body,html').animate({scrollTop: pos}, 500);
    });
});

