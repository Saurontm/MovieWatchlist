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
    if (!movie.watched) movie.rating = 0;
  };

  //function to add movie
  addMovie = (newMovieName) => {
    this.movies.push({
      name: newMovieName,
      id: this.movies.length + 1,
      watched: false,
      rating: 0,
    });
  };

  //change rating
  changeRating = (movieID, rating) => {
    const movie = this.movies.find((movie) => movie.id === movieID);
    movie.rating = rating;
  };
}

const movieStore = new MovieStore();
export default movieStore;
