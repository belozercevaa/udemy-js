'use strict'


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: '',
    genres: [],
    privat: false,
    countMovies: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (isNaN(this.count) || this.count === '' || this.count === null) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }

        this.detectPersonalLevel()
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (this.count > 10 && this.count < 50) {
            console.log('Вы классический зритель');
        } else if (this.count > 50) {
            console.log('Вы киноман');
        }
    },
    rememberMyFilms: function() {
        if (this.count > 0) {
            for (let i = 0; i < this.count; i++) {
                let title = prompt('Один из последних посмотренных фильмов?');
                while (title === '' || title === null || title.length > 50) {
                    title = prompt('Один из последних посмотренных фильмов?');
                }
                let stars = prompt('На сколько оцените его?');
                while (stars === '' || stars === null) {
                    stars = prompt('На сколько оцените его?');
                }

                this.movies[title] = stars;
            }
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            while (genres === '' || genres === null) {
                genres = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            this.genres.push(genres);
        }
        this.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${++i} - это ${value}`)
        });
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
};


// personalMovieDB.countMovies();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();