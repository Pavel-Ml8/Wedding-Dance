"use strict";$(document).ready((function(){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),$(".burger-btn").on("click",(function(e){e.preventDefault(),$(this).toggleClass("burger-btn_active"),$(".header__nav-box").toggleClass("header__nav-box_active"),$("body").toggleClass("body_hidden")})),$(".nav__link").on("click",(function(){$(".header__nav-box").removeClass("header__nav-box_active"),$(".burger-btn").removeClass("burger-btn_active"),$("body").removeClass("body_hidden")})),$(window).on("scroll resize",(function(){let e=$(".header");e.offset().top>0?e.addClass("header_active"):e.removeClass("header_active")})),$(".coach-desc__num").each((function(e,o){o.textContent=e<9?"0"+(e+1):""+(e+1)}));let e=$(".coaches__slider"),o=$(".arrow-nav__count-item"),s=$(".arrow-nav__btn_left"),i=$(".arrow-nav__btn_right");e.on("init reInit afterChange",(function(e,t,l){!function(e){let o=e.slideCount,s=Math.floor(e.options.slidesToShow),i=o%s,t=s-i;if(i>0)for(let o=0;o<t;o++)e.slickAdd('<div class="coach-card_empty"></div>')}(t),function(e){let s,i=e.slideCount,t=Math.floor(e.options.slidesToShow),l=e.options.slidesToScroll,n=(e.currentSlide+l)/l;s=i>t?Math.ceil((i-t)/l+1):n;o.text(`${n} of ${s}`)}(t),function(e){let o=e.slideCount,t=e.currentSlide+1,l=Math.floor(e.options.slidesToShow),n=o-(l-1);t<=1?s.addClass("arrow-nav__btn_disabled"):s.removeClass("arrow-nav__btn_disabled");t==n?i.addClass("arrow-nav__btn_disabled"):i.removeClass("arrow-nav__btn_disabled")}(t)})),e.slick({arrows:!1,dots:!1,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:2,touchThreshold:8,responsive:[{breakpoint:863,settings:{slidesToShow:1.3,slidesToScroll:1}},{breakpoint:601,settings:{dots:!0,slidesToShow:1.2,slidesToScroll:1}},{breakpoint:481,settings:{dots:!0,slidesToShow:1.2,slidesToScroll:1}}]}),s.on("click",(function(o){e.slick("slickPrev")})),i.on("click",(function(o){e.slick("slickNext")}));let t=$(".service-list");$(window).on("load resize orientationchange",(function(){document.documentElement.clientWidth<=862?t.hasClass("slick-initialized")||t.slick({arrows:!1,dots:!0,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:1,touchThreshold:8,responsive:[{breakpoint:861,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:601,settings:{slidesToShow:1.4,slidesToScroll:1}},{breakpoint:481,settings:{slidesToShow:1.2,slidesToScroll:1}}]}):t.hasClass("slick-initialized")&&t.slick("unslick")}))}));