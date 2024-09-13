import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";

export const FavoriteMovies = ({ user, favoriteMovieList }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Set favoriteMovies state when user changes
  useEffect(() => {
    if (user) {
      setFavoriteMovies(user.favoriteMovies || []);
    }
  }, [user]);

  // Function to remove a favorite movie from the list
  const removeFav = (movieId) => {
    const updatedMovies = favoriteMovies.filter((id) => id !== movieId);
    setFavoriteMovies(updatedMovies);
    // You can also call a backend API here to update the user favorites on the server
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovieList && favoriteMovieList.length > 0 ? (
        favoriteMovieList.map((movies) => (
          <div key={movies._id}>
            <Image src={movies.ImagePath} />
            <Link to={`/movies/${movies._id}`}>
              <h4>{movies.Title}</h4>
            </Link>
            <Button onClick={() => removeFav(movies._id)}>Remove From List</Button>
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
  user: PropTypes.object.isRequired,
  favoriteMovieList: PropTypes.array.isRequired
};