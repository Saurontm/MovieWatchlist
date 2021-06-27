import { Button } from "react-bootstrap";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react-lite";
const MovieStatusButton = (props) => {
  const handleUpdate = () => {
    movieStore.updateWatchStatus(props.movie);
  };
  return (
    <Button
      variant="primary"
      className="float-right"
      onClick={handleUpdate}
      style={{
        float: "right",
        marginRight: 10,
        color: "black",
        backgroundColor: "#03DAC6",
        borderColor: "#03DAC6",
      }}
    >
      {props.movie.watched ? "Unwatch" : "Watch"}
    </Button>
  );
};

export default observer(MovieStatusButton);
