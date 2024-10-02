var swiper =  new Swiper(".slider-slider", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 0,
    navigation: {
        clickable:true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",   
    },
    pagination: {
        el: ".swiper-pagination-slider",
        clickable:true,
      },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

var swiper =  new Swiper(".seller-slider", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper =  new Swiper(".instagram-slider", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
var swiper =  new Swiper(".brand-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    loop: true, 
    spaceBetween: 60,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
var swiper =  new Swiper(".testimonial-slider", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
var swiper =  new Swiper(".testimonial-slider-2", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
var swiper =  new Swiper(".product-slider", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
