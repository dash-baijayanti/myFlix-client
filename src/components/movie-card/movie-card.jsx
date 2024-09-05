import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

import "./movie-card.scss";
export const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <CardGroup>
      <Card className="h-100">
        <Card.Img variant="top"  src={movieData.ImageUrl} rounded />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => onMovieClick(movieData)} variant="info">
            Open
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

PropTypes.MovieCard = {
  movieData: PropTypes.shape({
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
  onBookClick: PropTypes.func.isRequired,
};
