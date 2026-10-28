

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['<', '>'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    // $('.reviews-slider').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     smartSpeed: 900,
    //     items: 1,
    //     margin: 24,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    // })
    var owlPartner = $('.partner-slide');
    // owlPartner.owlCarousel({
    //     items:7,
    //     loop:true,
    //     margin: 5,
    //     merge:true,
    //     autoplay: true,
    //     dots: false,
    //     smartSpeed: 2500
    // });
    // owlPartner.trigger('play.owl.autoplay',[1000])
    owlPartner.owlCarousel({
        loop: true,
        nav: false,
        items: 7,
        dots: false,
        smartSpeed: 2500,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 5,
    });
    owlPartner.trigger('play.owl.autoplay',[1000])
});
