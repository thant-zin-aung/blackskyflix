let currentWindowWidth = window.innerWidth;
const body = $("body");
const hideableSections = $("#topMovie,#topReleases,#newMovies,#awardMovies,#cartoons,#series,#pricing");
const movieDetailSection = $("#movieDetails");
const menuButtons = $(".main-nav-bar .right li");
const topMovieNextIcon = $(".top-movie-wrapper .next");
const topMoviePrevIcon = $(".top-movie-wrapper .prev");
const minorMovieImages = $(".minorMovies .imageWrapper img");
const rightSideMenu = $(".main-nav-bar .right");
const leftSideMenu = $(".main-nav-bar .leftside-nav-bar");
const menuIcon = $(".main-nav-bar .menu-icon");
const menuCloseIcon = $(".main-nav-bar .menu-close-icon");
let watchButtons = document.querySelectorAll(".watchButtonWrapper .fa-play");




$(window).on("popstate",() => {
    // movieDetailSection.css("display","none");
    // hideableSections.css("display","block");
    window.location.href = "./index.html";
})


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


minorMovieImages.attr("loading","lazy");


// Watch Movie Area Details

let trailerButton = $("#movieDetails .detailWrapper .right .trailerButtonWrapper .trailerButton button");
let closeMovieButton = $(".moviePlayerAreaWrapper .closeButton");
let watchNowButtons = $(".watchNowButtonWrapper button,.imageOverlay .watchButton");
let moviePlayer = $(".moviePlayerAreaWrapper");
let movie = $(".moviePlayerAreaWrapper .moviePlayerArea");
let moviePLayerIframe = $(".moviePlayerAreaWrapper .moviePlayerArea iframe");
let currentMovieDataId;
trailerButton.click( () => {
    moviePlayer.css("visibility","visible");
    moviePlayer.css("opacity","1");
    movie.css("transform","translateY(0%)");
    body.css("overflow-y","hidden");
    moviePLayerIframe.attr("src",`${movie_data[currentMovieDataId].trailerLink}`);
    
});
watchNowButtons.click( () => {
    moviePlayer.css("visibility","visible");
    moviePlayer.css("opacity","1");
    movie.css("transform","translateY(0%)");
    body.css("overflow-y","hidden");
    moviePLayerIframe.attr("src",`${movie_data[currentMovieDataId].movieLinks}`);
    
});
closeMovieButton.click( () => {
    moviePlayer.css("visibility","hidden");
    moviePlayer.css("opacity","0");
    movie.css("transform","translateY(-30%)");
    body.css("overflow-y","visible");
    moviePLayerIframe.attr("src","");
});

// Modified Movie Details Section

let posterBackgroundImage = $(".posterWrapper .imageWrapper img");
let leftPosterImage = $(".detailWrapper .left .imageWrapper img");
let movieTitle = $(".detailWrapper .right .movieTitle");
let movieRating = $(".detailWrapper .right .rating");
let movieDescription = $(".detailWrapper .right .movieDescription");
let movieRelease = $(".detailWrapper .right .movieInfoWrapper .left .releaseDate");
let moviegenre = $(".detailWrapper .right .movieInfoWrapper .left .genre");
let movieCasts = $(".detailWrapper .right .movieInfoWrapper .left .casts");
let movieDuration = $(".detailWrapper .right .movieInfoWrapper .right .duration");
let movieCountry = $(".detailWrapper .right .movieInfoWrapper .right .country");
let movieProduction = $(".detailWrapper .right .movieInfoWrapper .right .production");
let seasonWrapper = $("#movieDetails .seasonWrapper");


// $(window).on("popstate", function (event) {
//     // console.log("clicked");
    if ( movieDetailSection.css("display") === "block" ) {
        movieDetailSection.css("display","none");
        hideableSections.css("display","block");
    }
//     alert("clicked");
// });
// window.onhashchange = function() {
//     if (window.innerDocClick) {
//         //Your own in-page mechanism triggered the hash change
//     } else {
//         //Browser back button was clicked
//         // alert("clicked");
//         console.log("clicked");
//         if ( movieDetailSection.css("display") === "block" ) {
//             movieDetailSection.css("display","none");
//             hideableSections.css("display","block");
//         }
//     }
// }

let addIdToMovieWatchButtons = () => {
    for ( id = 0 ; id < watchButtons.length ; id++ ) {
        watchButtons[id].setAttribute("id",`${id}`);
        watchButtons[id].addEventListener("click",(event) => {
            setTimeout(() => {
                    currentMovieDataId = event.target.getAttribute("id");
                    posterBackgroundImage.attr("src",`${movie_data[currentMovieDataId].backgroundPoster}`);
                    // console.log(posterBackgroundImage);
                    leftPosterImage.attr("src",`${movie_data[currentMovieDataId].poster}`);
                    movieTitle.text(`${movie_data[currentMovieDataId].title}`);
                    movieRating.text(`${movie_data[currentMovieDataId].rating}`);
                    movieDescription.text(`${movie_data[currentMovieDataId].description}`);
                    movieRelease.html(`<span>Release: </span>${movie_data[currentMovieDataId].release}`);
                    moviegenre.html(`<span>Genre: </span>${movie_data[currentMovieDataId].genre}`);
                    movieCasts.html(`<span>Casts: </span>${movie_data[currentMovieDataId].casts}`);
                    movieDuration.html(`<span>Duration: </span>${movie_data[currentMovieDataId].duration}`);
                    movieCountry.html(`<span>Country: </span>${movie_data[currentMovieDataId].country}`);
                    movieProduction.html(`<span>Production: </span>${movie_data[currentMovieDataId].production}`);
                    hideableSections.css("display","none");
                    movieDetailSection.css("display","block");
                    moviePLayerIframe.attr("src",`${movie_data[currentMovieDataId].trailerLink}`);
                    if ( movie_data[currentMovieDataId].isSeries ) {
                        let seasonNumber = $(".seasonNumber");
                        let episodeWrappers = document.querySelectorAll(".episodeWrapper");
                        seasonNumber.remove();
                        for ( let id=0 ; id < episodeWrappers.length ; id++ ) {
                            episodeWrappers[id].remove();
                        }
                        seasonWrapper.css("display","block");
                        let totalSeasons = 0;
                        for ( let s in movie_data[currentMovieDataId].seasons )  ++totalSeasons;

                        seasonWrapper.append(`<div class="seasonNumber">Season 1</div>`);
                        for ( let id = 0 ; id < movie_data[currentMovieDataId].seasons.season1.videoLinks.length ; id++ ) {
                            seasonWrapper.append(`
                                <div class="episodeWrapper ep${id}">
                                    <div class="left">
                                        <div class="imageWrapper">
                                            <img src="${movie_data[currentMovieDataId].seasons.season1.thumbnailLinks[id]}" alt="Poster">
                                        </div>
                                        <div class="verticalSeperatorLine"></div>
                                        <div class="episodeDetailWrapper">
                                            <div class="episodeNumber">Episode ${id+1}</div>
                                            <div class="ratingAndDate">
                                                <i class="fas fa-star fillStar"></i> 9.1 (104) &nbsp;&nbsp;&nbsp; <i class="far fa-star unFillStar"></i> Rate
                                            </div>
                                            <p class="releaseDate">${movie_data[currentMovieDataId].seasons.season1.releaseDate[id]}</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <i class="fas fa-eye watchButton"></i>
                                        <div class="watchButtonWrapper"><button class="${id}">Watch</button></div>
                                    </div>
                                </div>
                            `);
                        }
                        let seriesWatchButton = document.querySelectorAll(".seasonWrapper .watchButtonWrapper");
                        for ( let id=0 ; id<seriesWatchButton.length ; id++ ) {
                            seriesWatchButton[id].addEventListener("click",(event) => {
                                let currentId=event.target.getAttribute("class");
                                moviePlayer.css("visibility","visible");
                                moviePlayer.css("opacity","1");
                                movie.css("transform","translateY(0%)");
                                body.css("overflow-y","hidden");
                                moviePLayerIframe.attr("src",`${movie_data[currentMovieDataId].seasons.season1.videoLinks[currentId]}`);
                            });
                        }
                    } else {
                        let seasonNumber = $(".seasonNumber");
                        let episodeWrappers = document.querySelectorAll(".episodeWrapper");
                        seasonNumber.remove();
                        for ( let id=0 ; id < episodeWrappers.length ; id++ ) {
                            episodeWrappers[id].remove();
                        }
                        seasonWrapper.css("display","none");
                        
                    }
                    // window.location.href = "./html/movie_detail.html";
                    
                    
                });    
            }, 500);
            
    }

};
addIdToMovieWatchButtons();

menuButtons.click( () => {
    hideableSections.css("display","block");
    movieDetailSection.css("display","none");
});