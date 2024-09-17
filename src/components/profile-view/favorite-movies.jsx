import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Row, Col, Figure } from "react-bootstrap";
import { RemoveFavoriteMovies } from "./remove-favorite-movies";
import PropTypes from "prop-types";

export const FavoriteMovies = ({ user, favoriteMovieList }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(user.favMovies || []);

  // Set favoriteMovies state when user changes
  useEffect(() => {
    console.log(user.favoriteMovies);
    console.log("Favorite Movies State:", favoriteMovies);

    if (user && user.favoriteMovies) {
      setFavoriteMovies(user.favoriteMovies);
    }
  }, [user]);

  // Function to remove a favorite movie from the list
  const removeFav = (movieId) => {
    const updatedMovies = favoriteMovies.filter((id) => id !== movieId);
    setFavoriteMovies(updatedMovies);
    // Call a backend API to update the user's favorite movies on the server
  };

  // Check if user and favoriteMovieList are defined before rendering
  if (!user || !favoriteMovieList) {
    return <p>Loading user data...</p>;
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <h2>Favorite Movies</h2>
          </Col>
        </Row>
        <Row>
          {favoriteMovieList && favoriteMovieList.length > 0 ? (
            favoriteMovieList.map((movie) => (
              <Col xs={12} md={6} lg={3} key={movie._id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${movie._id}`}>
                    {/* <h4>{movie.Title}</h4> */}
                  </Link>
                  <Figure.Image src={movie.ImageUrl} alt={movie.Title} />
                  <RemoveFavoriteMovies
                    movieId={movie._id}
                    onRemove={removeFav} // Pass the remove function
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
