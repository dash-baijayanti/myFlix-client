import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Row, Col, Figure } from "react-bootstrap";
import { RemoveFavoriteMovies } from "./remove-favorite-movies";
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
  const removeFav = (movieId) => {
    onRemove(movieId);
    const updatedMovies = favoriteMovies.filter(
      (movie) => movie._id !== movieId
    );
    setFavoriteMovies(updatedMovies);
    // Call a backend API to update the user's favorite movies on the server
  };

  // Function to remove a favorite movie from the list
  const addFav = (movieId) => {
    onAdd(movieId);
    const updatedMovies = favoriteMovies.filter(
      (movie) => movie._id !== movieId
    );
    setFavoriteMovies(updatedMovies);
    // Call a backend API to update the user's favorite movies on the server
  };

  // Check if user and favoriteMovieList are defined before rendering
  if (!user || !favoriteMovies) {
    return <p>Loading user data...</p>;
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <Row>
          <Col>
            <h1 className="dancing-script-uniquifier ">Favorite Movies</h1>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          {favoriteMovies && favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
              <Col md={6} lg={3} key={movie._id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${movie._id}`}>
                    {/* <h4>{movie.Title}</h4> */}
                  </Link>
                  <div className="pic">
                    <Figure.Image
                      src={movie.ImageUrl}
                      alt={movie.Title}
                      fluidroundedCircle
                    />
                  </div>
                  <RemoveFavoriteMovies
                    movieId={movie._id}
                    onRemove={() => removeFav(movie._id)} // Pass the remove function
                    onAdd={() => addFav(movie._id)}
                  />
                  <Figure.Caption>{movie.Title}</Figure.Caption>
                </Figure>
              </Col>
            ))
          ) : (
            <p>No favorite movies available.</p>
          )}
        </Row>
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
    })
  ),
};

FavoriteMovies.defaultProps = {
  user: {
    favoriteMovies: [],
  },
  favoriteMovieList: [],
};
