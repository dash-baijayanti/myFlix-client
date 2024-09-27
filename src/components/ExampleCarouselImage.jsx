import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { RemoveFavoriteMovies } from "./profile-view/remove-favorite-movies";

const ExampleCarouselImage = ({
  favoriteMovies,
  onRemove,
  onAdd,
  currentFavorites,
}) => {
  const cardsPerSlide = 2; // Number of cards to show per slide

  const slides = [];
  for (let i = 0; i < favoriteMovies.length; i += cardsPerSlide) {
    slides.push(favoriteMovies.slice(i, i + cardsPerSlide));
  }

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around">
            {slide.map((movie) => {
              const isFav = currentFavorites.includes(movie._id); // Determine if the movie is a favorite
              return (
                <Card md= {6}
                  style={{ width: "18rem", margin: "0 10px" }}
                  key={movie._id}
                >
                  <Card.Img
                    variant="top"
                    src={movie.ImageUrl}
                    alt={movie.Title}
                  />
                  <Card.Body>
                    <Card.Title>
                    
                      <span className="dancing-script-uniquifier">
                        {movie.Title}
                      </span>
                     
                    </Card.Title>

                    <RemoveFavoriteMovies
                      movieId={movie._id}
                      isFav={isFav}
                      onRemove={onRemove}
                      onAdd={onAdd}
                    />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ExampleCarouselImage.propTypes = {
  favoriteMovies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      ImageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired, // Function to add the movie
  currentFavorites: PropTypes.arrayOf(PropTypes.string).isRequired, // List of current favorite movie IDs
};

export default ExampleCarouselImage;
