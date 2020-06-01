'use strict';

$(document).ready(function () {

    // ______WOW Animation ________________________________________________________________________________________
    let wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        }
    );
    wow.init();

    //______BURGER-BTN______________________________________________________________________________________________
    $('.burger-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('burger-btn_active');
        $('.header__nav-box').toggleClass('header__nav-box_active');
        $('body').toggleClass('body_hidden');
    });

    $('.nav__link').on('click', function () {
        $('.header__nav-box').removeClass('header__nav-box_active');
        $('.burger-btn').removeClass('burger-btn_active');
        $('body').removeClass('body_hidden');
    });

    //______HEADER-ACTIVE___________________________________________________________________________________________
    $(window).on('scroll resize', function () {
        let header = $('.header');
        let headerPosition = header.offset().top;

        if (headerPosition > 0) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
    });

    // automatic numbering of coach cards__________________________________________________________________________
    let coachNam = $('.coach-desc__num');

    coachNam.each(function (index, value) {
        if (index < 9) value.textContent = (`0${index + 1}`);
        else value.textContent = (`${index + 1}`)
    });

    //Coach Slider _________________________________________________________________________________________________

    let coachSlider = $('.coaches__slider');
    let coachCounter = $(".arrow-nav__count-item");
    let coachLeftBtn = $('.arrow-nav__btn_left');
    let coachRightBtn = $('.arrow-nav__btn_right');

    coachSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
        addEmptySlide(slick);
        setCounter(slick);
        btnDisable(slick);
    });

    coachSlider.slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 8,
        responsive: [
            {
                breakpoint: 863,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    dots: true,
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    dots: true,
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    function setCounter(slick) {
        let slides = slick.slideCount;
        let slidesToShow = Math.floor(slick.options.slidesToShow);
        let slideToScroll = slick.options.slidesToScroll;
        let currentSlide = (slick.currentSlide + slideToScroll) / slideToScroll;

        let totalSlidesList;

        if (slides > slidesToShow) {
            totalSlidesList = Math.ceil((slides - slidesToShow) / slideToScroll + 1);
        } else {
            totalSlidesList = currentSlide;
        }

        coachCounter.text(`${currentSlide} of ${totalSlidesList}`);
    }

    function addEmptySlide(slick) {
        let slides = slick.slideCount;
        let slidesToShow = Math.floor(slick.options.slidesToShow);
        let numberRecentSlides = slides % slidesToShow;
        let missingSlides = slidesToShow - numberRecentSlides;

        if (numberRecentSlides > 0) {
            for (let i = 0; i < missingSlides; i++) {
                slick.slickAdd('<div class="coach-card_empty"></div>');
            }
        }
    }

    function btnDisable(slick) {
        let slides = slick.slideCount;
        let currentSlide = (slick.currentSlide + 1);
        let slidesToShow = Math.floor(slick.options.slidesToShow);
        let lastSlide = slides - (slidesToShow - 1);

        if (currentSlide <= 1) {
            coachLeftBtn.addClass('arrow-nav__btn_disabled');
        } else {
            coachLeftBtn.removeClass('arrow-nav__btn_disabled');
        }

        if (currentSlide == lastSlide) {
            coachRightBtn.addClass('arrow-nav__btn_disabled');
        } else {
            coachRightBtn.removeClass('arrow-nav__btn_disabled');
        }
    }

    coachLeftBtn.on('click', function (event) {
        coachSlider.slick('slickPrev');
    });

    coachRightBtn.on('click', function (event) {
        coachSlider.slick('slickNext');
    });

    // Service slider _____________________________________________________________________________________________
    let serviceSlider = $('.service-list');

    $(window).on('load resize orientationchange', function () {
        if (document.documentElement.clientWidth <= 862) {
            if (!serviceSlider.hasClass('slick-initialized')) {
                serviceSlider.slick({
                    arrows: false,
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    touchThreshold: 8,
                    responsive: [
                        {
                            breakpoint: 861,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 601,
                            settings: {
                                slidesToShow: 1.4,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1.2,
                                slidesToScroll: 1
                            }
                        }
                    ]
                })
            }
        } else {
            if (serviceSlider.hasClass('slick-initialized')) {
                serviceSlider.slick('unslick')
            }
        }
    });

});
