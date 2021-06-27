import { Name } from "../styles";
import MovieStatusButton from "./MovieStatusButton";
import { observer } from "mobx-react-lite";

const MovieEntry = (props) => {
  return (
    <tr>
      <td>
        <Name> {props.movie.name}</Name>
        <MovieStatusButton movie={props.movie}></MovieStatusButton>
        {/* <Button variant="danger" className="float-right">
          Delete
        </Button> */}
      </td>
    </tr>
  );
};

export default observer(MovieEntry);
