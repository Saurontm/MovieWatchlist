import { Table } from "react-bootstrap";
import movieStore from "../stores/movieStore";
import MovieEntry from "./MovieEntry";

const MovieTable = () => {
  const MovieList = movieStore.movies.map((movie) => (
    <MovieEntry movie={movie} />
  ));
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>{/* <th>Username</th> */}</tr>
        </thead>
        <tbody>{MovieList}</tbody>
      </Table>
    </div>
  );
};

export default MovieTable;
