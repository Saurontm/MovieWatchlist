import MovieTable from "./MovieTable";
import { Title } from "../styles";

const WatchedList = () => {
  return (
    <div>
      <Title>Watchlist</Title>
      <MovieTable watched={false}></MovieTable>
    </div>
  );
};

export default WatchedList;
