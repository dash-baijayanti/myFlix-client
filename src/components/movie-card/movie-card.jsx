import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

import "./movie-card.scss";
export const MovieCard = ({ movieData, user, token, onMovieAdded }) => {
  const handleAddToFavorites = (movieId) => {
    fetch(
      `https://movie-api-7rmr.onrender.com/users/${user.userName}/movies/${movieId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          onMovieAdded(data.favoriteMovies); // Update the favorite movies list in parent component
          alert("Movie added to favorites!");
        } else {
          alert("Failed to add movie to favorites.");
        }
      })
      .catch((error) => {
        console.error("Error adding movie to favorites:", error);
      });
  };

  // Defensive check for movieData
  if (!movieData || !movieData.ImageUrl) {
    return <div>Movie data is not available</div>; // Or handle this case in another way
  }

  return (
    <CardGroup className="h-100">
      <Card>
        <Card.Img variant="top" src={movieData.ImageUrl} rounded />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          {/* <Card.Text>{movieData.Description}</Card.Text> */}
          <Link to={`/movies/${encodeURIComponent(movieData._id)}`} />
        </Card.Body>
        <Card.Footer>
          <Button
            // onClick={() => onMovieClick(movieData)}
            variant="link"
          >
            Open
          </Button>
          <Button onClick={() => handleAddToFavorites(movieData._id)}>
            Add to Favorites
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      BirthYear: PropTypes.string.isRequired,
      DeathYear: PropTypes.string.isRequired,
    }),
  }).isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  onMovieAdded: PropTypes.func.isRequired,
};
