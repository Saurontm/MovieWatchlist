import movieStore from "../stores/movieStore";
import { Button } from "react-bootstrap";

const DeleteMovieButton = (props) => {
  const handleDelete = () => {
    movieStore.movieDelete(props.movieID);
  };
  return (
    <Button
      variant="danger"
      className="float-right"
      onClick={handleDelete}
      style={{
        float: "right",
        marginRight: 20,
        backgroundColor: "#6200EE",
        borderColor: "#6200EE",
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteMovieButton;
