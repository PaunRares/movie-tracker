// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
  <div class="side-bar-main">
  <div class="side-bar">
  <h1 class="title-side">Ada a movie</h1>
  <form id="addMovie">
    <div class="form-grup">
    <input type="text" name="movieName" class="input-text" placeholder="name" id="name" required>
    <label for="name" class="form-label">Name</label>
    </div>
    <div class="form-grup">
    <input type="text" name="moviePlot" class="input-text" placeholder="plot" id="plot" required>
    <label for="plot" class="form-label">Plot</label>
    </div>
    <div class="form-grup">
    <input type="text" name="posterLink" class="input-text" placeholder="poster link" id="link" required>
    <label for="link" class="form-label">Poster link</label>
    </div>
    <div class="form-grup">
    <input type="number" name="rating" class="input-text" placeholder="rating" id="rating" required>
    <label for="rating" class="form-label">Rating</label>
    </div>
    <div class="form-grup">
    <select id="year" name="releaseDate" class="input-text" required><option value=""></option></select>
    <label for="year" class="form-label-select">Release year</label>
    </div>
    <input type="submit" value="Add" class="sort-button">
  </form>
  </div>
  </div>
`;
let year = document.querySelector('#year');
for(let i=2000;i<=2022;i++){
  year.innerHTML += `<option value="${i}">${i}</option>`
}
function addFormFunctionality() {
  // adaugarea produsului
  function addMovie(nameM, plotM, posterM, releaseDateM, ratingM, addDateM) {
    // preluam produsele din localStorage
    const movies = APP.getMovies();
    // modificarea vectorului de produse
    movies.push({
      name: nameM,
      plot: plotM,
      poster: posterM,
      releaseDate: releaseDateM,
      rating: ratingM,
      addDate: addDateM
    });
    // adaugam vectorul in localStorage
    APP.addMovies(movies);

    // reafisam produsele
    APP.renderMovieList(movies);
  }

  const form = document.querySelector('#addMovie');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    // luam numele si pretul introduse de utilizator
    const name = event.target.movieName.value;
    const plot = event.target.moviePlot.value;
    const poster = event.target.posterLink.value;
    const releaseDate = event.target.releaseDate.value;
    const rating = Number(event.target.rating.value);
    const addDate = new Date();
    // apelam functia de adaugare a produsului
    addMovie(name, plot, poster, releaseDate, rating, addDate);
    form.reset();
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);
