// Signup by creating an account on https://www.themoviedb.org/signup, Once you get that API Key, you'll be able to makr a request.

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
/* // Here
api = sub domain
3 = version
/discover/movie?sort_by=popularity = end point from the documentation (Discover API Examples)
&api_key= = The key
&page=1 = For results in page one (20 objects) 
*/

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280' //from JSON
/*  // Here
https://image.tmdb.org/t/p = To get images from the documentation (Images) 
w1280 = width
JSON response already having a slash */
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="' //from JSON
/*  // Here
&query=" = To concatenate a search term fron search box */

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json() // to get JSON data

    showMovies(data.results) //results array
}

function showMovies(movies) {
    main.innerHTML = '' // To clear when we search 

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie //de-structuring

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {  // utility function to cateogrize using rating
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()  // prevent actual submission to the page
 
    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})