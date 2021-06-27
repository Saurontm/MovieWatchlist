import movies from "../movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  //function to make movie watched/ unwatched
  updateWatchStatus = (Updatedmovie) => {
    const movie = this.movies.find((movie) => movie.id === Updatedmovie.id);
    movie.watched = !movie.watched;
  };
  //function to add movie
}

const movieStore = new MovieStore();
export default movieStore;
