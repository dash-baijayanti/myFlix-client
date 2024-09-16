import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";

export const FavoriteMovies = ({ user, favoriteMovieList }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

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
  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovieList && favoriteMovieList.length > 0 ? (
        favoriteMovieList.map((movie) => (
          <div key={movie._id}>
            <Image src={movie.ImageUrl} alt={movie.Title} />
            <Link to={`/movies/${movie._id}`}>
              <h4>{movie.Title}</h4>
            </Link>
            <Button onClick={() => removeFav(movie._id)}>
              Remove From List
            </Button>
          </div>
        ))
      ) : (
        <p>No favorite movies available.</p>
      )}
    </div>
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
