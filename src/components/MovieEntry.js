import { Name } from "../styles";
import { Button } from "react-bootstrap";

const MovieEntry = (props) => {
  return (
    <tr>
      <td>
        <Name> {props.movie.name}</Name>
        <Button variant="primary" className="float-right">
          Watched
        </Button>
        <Button variant="danger" className="float-right">
          Delete
        </Button>
      </td>
      {/* <Button variant="primary">Watched</Button> */}
      {/* <Button variant="danger">Delete</Button> */}
    </tr>
  );
};

export default MovieEntry;
