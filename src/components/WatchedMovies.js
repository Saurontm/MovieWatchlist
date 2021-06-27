import MovieTable from "./MovieTable";
import { Title } from "../styles";
import { observer } from "mobx-react-lite";

const WatchedMovies = () => {
  return (
    <div>
      <Title>Watched</Title>
      <MovieTable watched={true}></MovieTable>
    </div>
  );
};

export default observer(WatchedMovies);
