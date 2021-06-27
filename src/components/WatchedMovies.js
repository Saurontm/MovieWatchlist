import MovieTable from "./MovieTable";
import { Title } from "../styles";

const WatchedMovies = () => {
  return (
    <div>
      <Title>Watched</Title>
      <MovieTable watched={true}></MovieTable>
    </div>
  );
};

export default WatchedMovies;
