'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: '',
    genres: [],
    privat: false,
};

function request() {
    let title = prompt('Один из последних посмотренных фильмов?');
    let stars = prompt('На сколько оцените его?');

    personalMovieDB.movies[title] = stars;

    console.log(personalMovieDB);
};

request();