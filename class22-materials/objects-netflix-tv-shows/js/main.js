//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows {
  constructor(showName, showRating, showCountry, showActors) {
    this.showname = showName;
    this.showrating = showRating;
    this.showcountry = showCountry;
    this.showactors = showActors;
  }
  get_show_rating() {
    return this.showrating * 5;
  }

  getShowActors() {
    if (this.showname == "Fight Club") {
      return "Alec Baldwin";
    }
  }
  getShowCountry() {
    if (this.showcountry == "Sweden") {
      return "Sweden";
    }
  }
}

let netflix = new NetflixShows("Fight Club", 2, "Sweden", "Alec Baldwin");

console.log(netflix.get_show_rating());

class MakeNetFlixShows {
  constructor(title, genre, rating, numOfEP) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEP = numOfEP;
  }

  addToList() {
    alert("added to list");
  }
  play() {
    alert("Show Starting");
  }
  stop() {
    alert("Show Stopping");
  }
}

let netflixx = new MakeNetFlixShows(
  "Are you afriad of the dark",
  "horror",
  4,
  5,
  94
);
