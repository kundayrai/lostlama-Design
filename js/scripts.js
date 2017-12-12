jQuery(document).ready(function($){

jQuery('.who-we-are-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        slide: 'div',
        cssEase: 'linear',
        prevArrow:'<div class="slick-prev-button"><i class="fa  fa-chevron-circle-left fa-2x" style="color:#FF5A5F"></i></div>',
        nextArrow:'<div class="slick-next-button"><i class="fa  fa-chevron-circle-right fa-2x" style="color:#FF5A5F"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    jQuery('.who-we-are-slider').css('visibility', 'visible');
});

