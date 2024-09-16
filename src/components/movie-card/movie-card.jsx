import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movieData, user, token, onMovieAdded = () => {} }) => {
  const handleAddToFavorites = async (movieId) => {
    try {
      const response = await fetch(
        `https://movie-api-7rmr.onrender.com/users/${user.userName}/movies/${movieId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        onMovieAdded(data.favoriteMovies); // Notify parent component
        alert("Movie added to favorites!");
      } else {
        alert("Failed to add movie to favorites.");
      }
    } catch (error) {
      console.error("Error adding movie to favorites:", error);
      alert("An error occurred while adding the movie to favorites.");
    }
  };

  // Guard clause to ensure valid movie data
  if (!movieData || !movieData.ImageUrl) {
    return <div>Movie data is not available</div>;
  }

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movieData.ImageUrl} alt={movieData.Title} />
      <Card.Body>
        <Card.Title>{movieData.Title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movieData._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={() => handleAddToFavorites(movieData._id)}>
          Add to Favorites
        </Button>
      </Card.Footer>
    </Card>
  );
};

// PropTypes validation
MovieCard.propTypes = {
  movieData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  onMovieAdded: PropTypes.func,
};