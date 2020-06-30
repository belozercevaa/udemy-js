'use strict'


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: '',
    genres: [],
    privat: false,
};


function start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    console.log(personalMovieDB.count);
    while (isNaN(personalMovieDB.count) || personalMovieDB.count === '' || personalMovieDB.count === null) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }

    detectPersonalLevel(personalMovieDB.count)
}

function detectPersonalLevel(count) {
    if (count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (count > 10 && count < 50) {
        console.log('Вы классический зритель');
    } else if (count > 50) {
        console.log('Вы киноман');
    }
}


function rememberMyFilms() {
    if (personalMovieDB.count > 0) {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let title = prompt('Один из последних посмотренных фильмов?');
            while (title === '' || title === null || title.length > 50) {
                title = prompt('Один из последних посмотренных фильмов?');
            }
            let stars = prompt('На сколько оцените его?');
            while (stars === '' || stars === null) {
                stars = prompt('На сколько оцените его?');
            }

            personalMovieDB.movies[title] = stars;
        }
    }
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genres = prompt(`Ваш любимый жанр под номером ${++i}`);
        personalMovieDB.genres.push(genres);
    }
}

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

start();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);