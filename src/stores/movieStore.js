import movies from "../movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  //function to delete
  movieDelete = (movieID) => {
    const updatedMovies = this.movies.filter((movie) => movie.id !== movieID);
    this.movies = updatedMovies;
  };

  //function to make movie watched/ unwatched
  updateWatchStatus = (Updatedmovie) => {
    const movie = this.movies.find((movie) => movie.id === Updatedmovie.id);
    movie.watched = !movie.watched;
  };

  //function to add movie
  addMovie = (newMovieName) => {
    console.log(newMovieName);
    this.movies.push({
      name: newMovieName,
      id: this.movies.length + 1,
      watched: false,
    });
    console.log(this.movies);
  };

  // {
  //   id: 3,
  //   name: "The Return of The King",
  //   watched: false,
  // },
}

const movieStore = new MovieStore();
export default movieStore;
