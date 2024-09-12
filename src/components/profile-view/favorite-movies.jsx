import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

function FavoriteMovies({ favoriteMovieList }) {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovieList.map((movies) => {
        return (
          <div key={movies._id}>
            <Image src={movies.ImagePath} />
            <Link to={`/movies/${movies._id}`}>
              <h4>{movies.Title}</h4>
            </Link>
            <Button onClick={() => removeFav(movies._id)}>
              Remove From List
            </Button>
          </div>
        );
      })}
    </div>
  );
}
