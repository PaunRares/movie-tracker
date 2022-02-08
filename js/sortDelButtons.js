// aduagam in pagina HTML elementul de sortare
let sideBar = document.querySelector('.side-bar');
sideBar.insertAdjacentHTML("beforeend", `
  <h1 class="title-side">Sort movies</h1>
  <button id="sortByName" class="sort-button">After name</button>
  <button id="sortByYear" class="sort-button">After release year</button>
  <button id="sortByRating" class="sort-button">After rating</button>
  <button id="sortByDate" class="sort-button">After add date</button>
`);

// functia de sortare
function sortMovies(sortType) {
  let sortedArray;
  switch(sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByName":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
      sortedArray = APP.getMovies().sort((elem1, elem2) => {
        let nameA = elem1.name.toUpperCase();
        let nameB = elem2.name.toUpperCase();
        if(nameA < nameB) {
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      });
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
      break;
    case "sortByYear":
      sortedArray = APP.getMovies().sort((elem1, elem2) => Number(elem2.releaseDate) - Number(elem1.releaseDate));
      break;
      case "sortByRating":
        sortedArray = APP.getMovies().sort((elem1, elem2) => Number(elem2.rating) - Number(elem1.rating));
        break;
    case "sortByDate":
      sortedArray = APP.getMovies().sort((elem1, elem2) => elem1.addDate - elem2.addDate);
      break;
    }
  // then we render the sorted list
  APP.renderMovieList(sortedArray);

}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByName = document.querySelector('#sortByName');
sortByName.addEventListener('click', function() {
  sortMovies('sortByName');
});
const sortByYear = document.querySelector('#sortByYear');
sortByYear.addEventListener('click', function() {
  sortMovies('sortByYear');
});
const sortByRating = document.querySelector('#sortByRating');
sortByRating.addEventListener('click', function() {
  sortMovies('sortByRating');
});
const sortByDate = document.querySelector('#sortByDate');
sortByDate.addEventListener('click', function() {
  sortMovies('sortByDate');
});

const movieList = document.querySelector('#movie-list');
const checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', function (event) {

  if(event.target.checked){
    movieList.className = "ul-list";
  }else {
    movieList.className = "ul";
  }
})


//delete buttons

movieList.addEventListener('click', function(event) {
    const clickedElem = event.target;
    if (clickedElem.className === 'delete-button') {
        const nameOfClickedMovie = clickedElem.value;
        const lsMovie = APP.getMovies();
        const newMoviesArray = lsMovie.filter(movie => movie.name !== nameOfClickedMovie);
        APP.addMovies(newMoviesArray);
        APP.renderMovieList(newMoviesArray);
    }
});
