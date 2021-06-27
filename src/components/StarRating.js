import React, { useState } from "react";
import Rating from "react-simple-star-rating";
import movieStore from "../stores/movieStore";

const StarRating = (props) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    movieStore.changeRating(props.movie.id, rate);
    // Some logic
  };

  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        transition
        fillColor="orange"
        emptyColor="gray"
      />
    </div>
  );
};

export default StarRating;
