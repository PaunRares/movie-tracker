class Movie {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(name, plot, poster, releaseDate, rating, addDate) {
		this.name = name;
		this.plot = plot;
		this.poster = poster;
		this.releaseDate = releaseDate;
		this.rating = rating;
		this.addDate = addDate;
	}

	 timeSince(date) {

	  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
	  let interval = seconds / 31536000;
	  if (interval > 1) {
			if (Math.floor(interval) === 1){
				return Math.floor(interval) + " year ago";
			}
	    return Math.floor(interval) + " years ago";
	  }
	  interval = seconds / 2592000;
	  if (interval > 1) {
			if (Math.floor(interval) === 1){
				return Math.floor(interval) + " month ago";
			}
	    return Math.floor(interval) + " months ago";
	  }
	  interval = seconds / 86400;
	  if (interval > 1) {
			if (Math.floor(interval) === 1){
				return Math.floor(interval) + " day ago";
			}
	    return Math.floor(interval) + " days ago";
	  }
	  interval = seconds / 3600;
	  if (interval > 1) {
			if (Math.floor(interval) === 1){
				return Math.floor(interval) + " hour ago";
			}
	    return Math.floor(interval) + " hours ago";
	  }
	  interval = seconds / 60;
	  if (interval > 1) {
			if (Math.floor(interval) === 1){
				return Math.floor(interval) + " minute ago";
			}
	    return Math.floor(interval) + " minutes ago";
	  }
	  return Math.floor(seconds) + " seconds ago";
}

	// metoda renderProduct adauga produse in interiorul listei de produse
	renderMovie() {
		const movieList = document.querySelector('#movie-list');
		movieList.innerHTML += `
			<li class="movie">
				<h1>${this.name}</h1>
				<div class="movie-img"><img src=${this.poster}></div>
				<div class="info">
				<p>Plot: ${this.plot} </p>
				<p>Release year: ${this.releaseDate}</p>
				<p>Rating: ${this.rating}</p>
				<p>Add date: ${this.timeSince(this.addDate)}</p>
				<button class="delete-button" value="${this.name}">Delete</button>
				</div>
			</li>
		`;
	}
}
