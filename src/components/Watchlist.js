import MovieTable from "./MovieTable";

const WatchedList = () => {
  return (
    <div>
      <MovieTable watched={false}></MovieTable>
    </div>
  );
};

export default WatchedList;
