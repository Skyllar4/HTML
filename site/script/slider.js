const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    allowSlideNext: true,

});

let attributeIndex = 1;

const bullets = document.querySelectorAll(".swiper-pagination-bullet");

bullets.forEach(item => {
    item.setAttribute("aria-label", `Перейти к слайду ${attributeIndex}`);
    attributeIndex += 1;
})
