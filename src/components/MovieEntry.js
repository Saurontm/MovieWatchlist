import { Name } from "../styles";
import MovieStatusButton from "./MovieStatusButton";
import { observer } from "mobx-react-lite";
import DeleteMovieButton from "./DeleteMovieButton";
import StarRating from "./StarRating";

const MovieEntry = (props) => {
  return (
    <tr>
      <td>
        <Name> {props.movie.name}</Name>
        {props.movie.watched ? (
          <StarRating movie={props.movie}></StarRating>
        ) : (
          ""
        )}
        <MovieStatusButton movie={props.movie}></MovieStatusButton>
        <DeleteMovieButton movieID={props.movie.id}></DeleteMovieButton>
      </td>
    </tr>
  );
};

export default observer(MovieEntry);
