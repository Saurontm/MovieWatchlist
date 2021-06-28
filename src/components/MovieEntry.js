import { Name } from "../styles";
import MovieStatusButton from "./MovieStatusButton";
import { observer } from "mobx-react-lite";
import DeleteMovieButton from "./DeleteMovieButton";
import StarRating from "./StarRating";

const MovieEntry = (props) => {
  return (
    <tr>
      <td>
        <Name> {props.movie.name} </Name>

        <MovieStatusButton movie={props.movie}></MovieStatusButton>
        <DeleteMovieButton movieID={props.movie.id}></DeleteMovieButton>
        {props.movie.watched ? (
          <StarRating movie={props.movie}></StarRating>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default observer(MovieEntry);
