import { Name } from "../styles";
import MovieStatusButton from "./MovieStatusButton";
import { observer } from "mobx-react-lite";
import DeleteMovieButton from "./DeleteMovieButton";

const MovieEntry = (props) => {
  return (
    <tr>
      <td>
        <Name> {props.movie.name}</Name>
        <MovieStatusButton movie={props.movie}></MovieStatusButton>
        <DeleteMovieButton movieID={props.movie.id}></DeleteMovieButton>
      </td>
    </tr>
  );
};

export default observer(MovieEntry);
