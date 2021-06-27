import MovieTable from "./MovieTable";
import { observer } from "mobx-react-lite";

const WatchedMovies = () => {
  return (
    <div>
      <MovieTable watched={true}></MovieTable>
    </div>
  );
};

export default observer(WatchedMovies);
