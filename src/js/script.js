import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../sass/style.scss"

const burger = document.getElementsByClassName('hdr__burger');
const menu = document.getElementsByClassName('hdr__menu')
const closed = document.getElementsByClassName('hdr__menu-closed');

burger[0].addEventListener('click', function () {
    menu[0].classList.add('hdr__menu_active');
    document.body.style = 'overflow: hidden;'
})

closed[0].addEventListener('click', function () {
    menu[0].classList.remove('hdr__menu_active')
    document.body.style = 'overflow: inherit;'
})

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            // when window is >= 1200
            slidesPerView: 3,
            spaceBetween: 5
        },
        1920: {
            // when window is >= 1920
            slidesPerView: 3,
            spaceBetween: 35
        },
    },
});





