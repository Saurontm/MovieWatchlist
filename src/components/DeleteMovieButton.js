import movieStore from "../stores/movieStore";
import { Button } from "react-bootstrap";

const DeleteMovieButton = (props) => {
  const handleDelete = () => {
    movieStore.movieDelete(props.movieID);
  };
  return (
    <Button variant="danger" className="float-right" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteMovieButton;
