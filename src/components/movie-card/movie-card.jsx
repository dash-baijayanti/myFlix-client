import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoriteMovies } from "../profile-view/favorite-movies";
import "./movie-card.scss";

export const MovieCard = ({
  movieData,
  user,
  updatedUser = () => {},
  token,
  onMovieAdded = () => {},
}) => {
  // Check if the movie is already in the user's favorite movies
  const isFavorite = user?.favMovies?.includes(movieData._id);
  const onMovieClick = (movieData) => {
    // Handle the movie click event (e.g., log movie data or navigate)
    console.log('Movie clicked:', movieData);
  };
  const handleAddToFavorites = async (movieId) => {
    if (!user || !user.userName) {
      alert("User is not defined or doesn't have a userName.");
      return;
    }
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
        onMovieAdded(data.favMovies);
        alert("Movie added to favorites!");
        // Update the user data and localStorage here
        updatedUser(data);
        localStorage.setItem("user", JSON.stringify(data)); // Update local storage with the updated user object
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
      <Card.Img variant="top" src={movieData.ImageUrl} />
      <Card.Body className="fontt">
        <Card.Title className="dancing-script-uniquifier">
          <span className="spa">{movieData.Title}</span>
        </Card.Title>
        {/* <Card.Text>{movieData.Description}</Card.Text> */}
      </Card.Body>
      <Card.Footer>
        <Link to={`/movies/${encodeURIComponent(movieData._id)}`}>
          <Button onClick={() => onMovieClick(movieData)} variant="link">
            View Movie
          </Button>
        </Link>
        {/* Conditionally render "Add to Favorites" or "Already Added" */}
        {isFavorite ? (
          <Button variant="success" disabled>
            Already Added
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => handleAddToFavorites(movieData._id)}
          >
            Add to Favorites
          </Button>
        )}
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
