new Splide('.splide',{
    autoplay: false,
    interval: 3500,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '200px',
    fixedHeight: '270px',
    gap: '15px',
    padding: {
        left: '5px',
        
    },
    breakpoints: {
        770: {
            fixedWidth: '180px',
            fixedHeight: '240px'
        },
        600: {
            fixedWidth: '150px',
            fixedHeight: '200px'
        },
        500: {
            fixedWidth: '120px',
            fixedHeight: '160px',
            gap: '8px'
        }
    }
}).mount();

new Splide('#newMoviesSplide',{
    autoplay: false,
    interval: 5000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '350px',
    fixedHeight: '230px',
    gap: '15px',
    padding: {
        left: '5px',
        
    },
    breakpoints: {
        770: {
            fixedWidth: '280px',
            fixedHeight: '180px'
        },
        600: {
            fixedWidth: '240px',
            fixedHeight: '150px'
        },
        500: {
            fixedWidth: '187px',
            fixedHeight: '120px',
            gap: '8px'
        }
    }
}).mount();

new Splide('#cartoonSplide',{
    autoplay: false,
    interval: 4000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    fixedWidth: '200px',
    fixedHeight: '270px',
    gap: '10px',
    padding: {
        left: '5px',
        
    },
    breakpoints: {
        770: {
            fixedWidth: '180px',
            fixedHeight: '240px'
        },
        600: {
            fixedWidth: '150px',
            fixedHeight: '200px'
        },
        500: {
            fixedWidth: '120px',
            fixedHeight: '160px',
            gap: '8px'
        }
    }
}).mount();
new Splide('#seriesSplide',{
    autoplay: false,
    interval: 5000,
    pauseOnHover: true,
    type: 'loop',
    cover: 'true',
    arrows: 'false',
    pagination: 'false',
    fixedWidth: '350px',
    fixedHeight: '230px',
    gap: '15px',
    padding: {
        left: '5px',
        
    },
    breakpoints: {
        770: {
            fixedWidth: '280px',
            fixedHeight: '180px'
        },
        600: {
            fixedWidth: '240px',
            fixedHeight: '150px'
        },
        500: {
            fixedWidth: '187px',
            fixedHeight: '120px',
            gap: '8px'
        }
    }
}).mount();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        topMoviePrevIcon,
        topMovieNextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});