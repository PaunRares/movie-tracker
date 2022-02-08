// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.movies = [];
APP.addMovies = (movies) => {
	localStorage.setItem("movies", JSON.stringify(movies));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam
APP.getMovies = () => {
	const movies = localStorage.getItem("movies");
	return JSON.parse(movies);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
async function addMoviesInArray () {
	for(let i=2; i<=5; i=2*i-1) {
		let response = await fetch(`https://www.omdbapi.com/?apikey=fced3ba8&t=${i}`);
		let movie = await response.json();
		APP.movies.push({
			name: movie.Title,
			plot: movie.Plot,
			poster: movie.Poster,
			releaseDate: movie.Year,
			rating: movie.imdbRating,
			addDate: new Date('Mon Dec 27 2021 18:59:01')
		});
	};


}

async function startRendering() {
	// asteptam raspunsul de la omdb api
	await addMoviesInArray();
	if (APP.getMovies() === null) {
		APP.addMovies(APP.movies);
	};

	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderMovieList(APP.getMovies());
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);
