const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let movieTitleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(movieTitleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = movieTitleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(43, 43, 77, 0.527), rgba(70, 49, 49, 0.521)),
    url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(43, 43, 77, 0.527), rgba(70, 49, 49, 0.521)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';

});

