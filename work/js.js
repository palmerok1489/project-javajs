const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMoviED = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?','');
const b = prompt('На сколько оцените фильм?','');
const c = prompt('Один из последних просмотренных фильмов?','');
const d = prompt('На сколько оцените фильм?','');

personalMoviED.movies[a] = b;
personalMoviED.movies[c] = d;

console.log(personalMoviED);