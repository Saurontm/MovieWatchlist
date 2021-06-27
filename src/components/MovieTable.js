import { Table } from "react-bootstrap";
import movieStore from "../stores/movieStore";
import MovieEntry from "./MovieEntry";
import { observer } from "mobx-react-lite";

const MovieTable = (props) => {
  const MovieList = movieStore.movies
    .filter((movie) => movie.watched === props.watched)
    .map((movie) => <MovieEntry movie={movie} />);
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

export default observer(MovieTable);
