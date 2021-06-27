import movies from "../movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  //function to add movie

  //function to make movie watched/ unwatched
}

const movieStore = new MovieStore();
export default movieStore;
