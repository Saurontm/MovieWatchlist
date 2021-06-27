import { Table, Badge } from "react-bootstrap";
import movieStore from "../stores/movieStore";
import MovieEntry from "./MovieEntry";
import { observer } from "mobx-react-lite";
import { Title } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MovieTable = (props) => {
  const [query, setQuery] = useState("");

  const allMovies = movieStore.movies.filter(
    (movie) => movie.watched === props.watched
  );

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .filter((movie) => movie.watched === props.watched)
    .map((movie) => <MovieEntry key={movie.id} movie={movie} />);
  return (
    <div>
      <Title>
        {props.watched ? "Watched" : "Watchlist"}{" "}
        <Badge bg="warning">{allMovies.length}</Badge>
      </Title>
      <Table striped bordered hover variant="dark">
        <thead>
          <SearchBar setQuery={setQuery} />
        </thead>
        <tbody>{movieList}</tbody>
      </Table>
    </div>
  );
};

export default observer(MovieTable);
