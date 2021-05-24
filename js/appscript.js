let currentWindowWidth = window.innerWidth;
const topMovieNextIcon = $(".top-movie-wrapper .next");
const topMoviePrevIcon = $(".top-movie-wrapper .prev");
const minorMovieImages = $(".minorMovies .imageContainer img");
const rightSideMenu = $(".main-nav-bar .right");
const leftSideMenu = $(".main-nav-bar .leftside-nav-bar");
const menuIcon = $(".main-nav-bar .menu-icon");
const menuCloseIcon = $(".main-nav-bar .menu-close-icon");

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

menuIcon.click( () => {
    leftSideMenu.css("transform","translateX(0%)");
    menuIcon.css("opacity","0");
    menuCloseIcon.css("opacity","1");
    menuIcon.css("display","none");
    menuCloseIcon.css("display","inline-block");
    
});
menuCloseIcon.click( () => {
    leftSideMenu.css("transform","translateX(-100%)");
    menuIcon.css("opacity","1");
    menuCloseIcon.css("opacity","0");
    menuCloseIcon.css("display","none");
    menuIcon.css("display","inline-block");
});
leftSideMenu.click( () =>  {
    leftSideMenu.css("transform","translateX(-100%)");
    menuIcon.css("opacity","1");
    menuCloseIcon.css("opacity","0");
    menuCloseIcon.css("display","none");
    menuIcon.css("display","inline-block");
});

// const setSliderToAutoPlay = ( slider , widthPerMovie , maxWidth , duration ) => {
//     duration *= 1000;
//     let tempWidthPerMovie = 0;
//     for ( let i = 0 ; i < 100000 ; i++ ) {
//         setTimeout( () => {
//             tempWidthPerMovie+=widthPerMovie;
//             if(tempWidthPerMovie > maxWidth ) tempWidthPerMovie=0;
//             slider.css("transform",`translateX(-${tempWidthPerMovie}px)`);
//             console.log(tempWidthPerMovie);
//         },i*duration);
//     }
// }


minorMovieImages.attr("loading","lazy");

const topReleaseNextIcon = $(".top-release-movie-wrapper .next");
const topReleasePrevIcon = $(".top-release-movie-wrapper .prev");
const topReleaseImageSlider = $(".topReleaseImageSlider");
let trSliderWidth = parseInt(topReleaseImageSlider.css("width").slice(0,-2));
let trMaxWidth = (trSliderWidth - currentWindowWidth)+110;
let tempWidthPerTRMovie = 0;
let widthPerTRMovie = parseInt($(".topReleaseImageSlider .imageContainer").css("width").slice(0,-2));
topReleaseNextIcon.click( () => {
    tempWidthPerTRMovie+=widthPerTRMovie;
    if ( tempWidthPerTRMovie > trMaxWidth ) {
        tempWidthPerTRMovie = trMaxWidth;
        return;
    }
    topReleaseImageSlider.css("transform",`translateX(-${tempWidthPerTRMovie}px)`);
});
topReleasePrevIcon.click( () => {
    tempWidthPerTRMovie-=widthPerTRMovie;
    if ( tempWidthPerTRMovie < 0 ) {
        tempWidthPerTRMovie=0;
        topReleaseImageSlider.css("transform","translateX(5px)");
        return;
    }
    topReleaseImageSlider.css("transform",`translateX(-${tempWidthPerTRMovie}px)`);
});

const newMovieNextIcon = $(".new-movies-wrapper .next");
const newMoviePrevIcon = $(".new-movies-wrapper .prev");
const newMoviesImageSlider = $(".newMoviesImageSlider");
let nmSliderWidth = parseInt(newMoviesImageSlider.css("width").slice(0,-2));
let nmMaxWidth = (nmSliderWidth - currentWindowWidth)+100;
let tempWidthPerNMovie = 0;
let widthPerNMovie = parseInt($(".newMoviesImageSlider .imageContainer").css("width").slice(0,-2))+3;
newMovieNextIcon.click( () => {
    tempWidthPerNMovie+=widthPerNMovie;
    if ( tempWidthPerNMovie > nmMaxWidth ) {
        tempWidthPerNMovie = nmMaxWidth;
        return;
    }
    newMoviesImageSlider.css("transform",`translateX(-${tempWidthPerNMovie}px)`);
    
});
newMoviePrevIcon.click( () => {
    tempWidthPerNMovie-=widthPerNMovie;
    if ( tempWidthPerNMovie < 0 ) {
        tempWidthPerNMovie=0;
        newMoviesImageSlider.css("transform","translateX(5px)");
        return;
    }
    newMoviesImageSlider.css("transform",`translateX(-${tempWidthPerNMovie}px)`);
});

// setSliderToAutoPlay(topReleaseImageSlider,widthPerTRMovie,600,5);
// setSliderToAutoPlay(newMoviesImageSlider,widthPerNMovie,2130,8);

$(window).resize( () => {
    console.log("resized...");
    currentWindowWidth = window.innerWidth;
    trSliderWidth = parseInt(topReleaseImageSlider.css("width").slice(0,-2));
    nmSliderWidth = parseInt(newMoviesImageSlider.css("width").slice(0,-2));
    widthPerTRMovie = parseInt($(".topReleaseImageSlider .imageContainer").css("width").slice(0,-2));
    widthPerNMovie = parseInt($(".newMoviesImageSlider .imageContainer").css("width").slice(0,-2))+3;
    trMaxWidth = (trSliderWidth - currentWindowWidth)+110;
    nmMaxWidth = (nmSliderWidth - currentWindowWidth)+100;
    topReleaseImageSlider.css("transform","translateX(5px)");
    newMoviesImageSlider.css("transform","translateX(5px)");
    tempWidthPerTRMovie=0;
    tempWidthPerNMovie=0;
    if ( currentWindowWidth > 671 ) {
        menuIcon.css("display","none");
    } else {
        menuIcon.css("display","inline-block");
    }
})