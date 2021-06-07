$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__list').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $('.toggle-popup').click(function () {
        $('.popup-register').toggleClass('show');
        $('.bg-menu').toggleClass('show');
    });

    $('.bg-menu').click(function () {
        $('.popup').removeClass('show');
        $('.bg-menu').removeClass('show');
    });
    $('.close').click(function () {
        $('.popup').removeClass('show');
        $('.bg-menu').removeClass('show');
    });

    $(".filter a").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.projects__container').animate({ scrollTop: 0 });
    });

    $('.toggle-description').click(function (event) {
        $('.feature__title').removeClass('active');
        $(this).toggleClass('active');
        $('.feature__text').removeClass('show');
        $('.feature__text.description').toggleClass('show');
    });

    $('.toggle-characteristics').click(function (event) {
        $('.feature__title').removeClass('active');
        $(this).toggleClass('active');
        $('.feature__text').removeClass('show');
        $('.feature__text.characteristics').toggleClass('show');
    });




});

$(function () {

    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});


var swiper = new Swiper(".product-info__slider-container", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
});
var swiper2 = new Swiper(".product-info__slider-container2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});
clear();