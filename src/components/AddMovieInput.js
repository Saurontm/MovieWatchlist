import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import movieStore from "../stores/movieStore";
import { useState } from "react";

const AddMovieInput = () => {
  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(movieName);
    movieStore.addMovie(movieName);
  };
  return (
    <Form onSubmit={handleAdd} style={{ marginTop: 40, marginBottom: 40 }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add new movie"
          aria-label="Movie"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          required
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          + Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default AddMovieInput;
