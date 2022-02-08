// adaugam lista de produse in html
let sideBarMain = document.querySelector('.side-bar-main')
 sideBarMain.insertAdjacentHTML("beforeend",`
	<div class="main">
  <div class="title-toggle">
	<h2>Movies:</h2>
  <div class="toggle">
  <p>Table</p>
  <input id="checkbox" type="checkbox">
  <p>List</p>
  </div>
  </div>
	<ul id="movie-list" class="ul">
	</ul>
	</div>
`);

APP.renderMovieList = (movieArray) => {
	// golim lista in care se vor afisa produsele
	const movieList = document.querySelector('#movie-list');
	movieList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	movieArray.forEach( (elem) => {
		// cream un produs
		movie = new Movie(elem.name, elem.plot, elem.poster, elem.releaseDate, elem.rating, elem.addDate);
		// il afisam in pagina web
		movie.renderMovie();
	});
}
