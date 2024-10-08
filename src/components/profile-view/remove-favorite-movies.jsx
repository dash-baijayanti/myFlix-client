import React, { useState, useEffect } from "react";

import { Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const RemoveFavoriteMovies = ({ movieId,isFav, onRemove, onAdd }) => {
  const handleRemove = () => {
    onRemove(movieId); // Call the passed-in function to remove the movie
  };

  const handleAdd = () => {
    onAdd(movieId); // Call the passed-in function to remove the movie
  };

  return (
   
    <Button onClick={handleRemove} variant="danger">
      Remove
    </Button>
  
  );
};

RemoveFavoriteMovies.propTypes = {
  movieId: PropTypes.string.isRequired, // Movie ID to remove
  onRemove: PropTypes.func.isRequired, // Function to remove the movie
};
