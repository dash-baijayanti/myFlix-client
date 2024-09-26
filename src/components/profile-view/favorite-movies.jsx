import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Row, Col, Figure } from "react-bootstrap";
import ExampleCarouselImage from "../ExampleCarouselImage";
import PropTypes from "prop-types";

export const FavoriteMovies = ({
  user,
  favoriteMovieList,
  onRemove,
  onAdd,
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Set favoriteMovies state when favoriteMovieList changes
  useEffect(() => {
    setFavoriteMovies(favoriteMovieList);
  }, [favoriteMovieList]);

  // Function to remove a favorite movie from the list
  const handleRemove = (movieId) => {
    // Call the passed-in function to remove the movie from the backend or state management
    onRemove(movieId);

    // Update local state to reflect the change
    setFavoriteMovies((prevMovies) =>
      prevMovies.filter((movie) => movie._id !== movieId)
    );
  };

  // Function to remove a favorite movie from the list
  // const removeFav = (movieId) => {
  //   onRemove(movieId);
  //   const updatedMovies = favoriteMovies.filter(
  //     (movie) => movie._id !== movieId
  //   );
  //   setFavoriteMovies(updatedMovies);
  //   // Call a backend API to update the user's favorite movies on the server
  // };

  // Function to remove a favorite movie from the list
  // const addFav = (movieId) => {
  //   onAdd(movieId);
  //   const updatedMovies = favoriteMovies.filter(
  //     (movie) => movie._id !== movieId
  //   );
  //   setFavoriteMovies(updatedMovies);
  //   // Call a backend API to update the user's favorite movies on the server
  // };

  // Check if user and favoriteMovieList are defined before rendering
  if (!user || !favoriteMovies) {
    return <p>Loading user data...</p>;
  }

  const currentFavorites = user.favoriteMovies || []; // Assuming this is the list of user's favorite movie IDs

  return (
    <Card className="h-100">
      <Card.Header>
        <Row>
          <Col>
            <h3>Favorite Movies</h3>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {favoriteMovies && favoriteMovies.length > 0 ? (
          <ExampleCarouselImage
            favoriteMovies={favoriteMovies}
            onRemove={handleRemove} // Pass the remove function
            onAdd={onAdd}
            currentFavorites={currentFavorites} // Pass current favorites
          />
        ) : (
          <p>No favorite movies available.</p>
        )}
      </Card.Body>
    </Card>
  );
};

// PropTypes validation
FavoriteMovies.propTypes = {
  user: PropTypes.shape({
    favoriteMovies: PropTypes.arrayOf(PropTypes.string), // Make optional
  }),
  favoriteMovieList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      ImageUrl: PropTypes.string.isRequired,
      // Description: PropTypes.string,
    })
  ),
  onRemove: PropTypes.func.isRequired, // Function to remove the movie
  onAdd: PropTypes.func.isRequired, // Function to add the movie
};

FavoriteMovies.defaultProps = {
  user: {
    favoriteMovies: [],
  },
  favoriteMovieList: [],
};
