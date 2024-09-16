import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UserInfo from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({
  user,
  token,
  updatedUser,
  onLoggedOut,
  favoriteMovieList,
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState(favoriteMovieList || []);
  const [movies, setMovies] = useState([]); // State to store movies
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch movies from the API
  useEffect(() => {
    console.log(favoriteMovieList);
    console.log("Movies data:", movies);
    console.log("User's favorite movies:", favoriteMovieList);
    fetch("https://movie-api-7rmr.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data); // Set the fetched movies
        setLoading(false); // Set loading to false after movies are loaded
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false); // Set loading to false on error
      });
  }, [token]);

  // Filter out favorite movies from the movie list
  // const favoriteMoviesData = movies.filter((movie) =>
  //   favoriteMovies.includes(movie._id)
  // );

  const handleMovieAdded = (favoriteMovies) => {
    console.log("Updated favorite movies:", favoriteMovies);
  };

  const handleProfileDelete = () => {
    if (!user.userName) {
      return;
    }
    fetch(`https://movie-api-7rmr.onrender.com/users/${user.userName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Account deleted successfully!");
          onLoggedOut();
        } else {
          alert("Failed to delete account!");
        }
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
        alert("An error occurred while trying to delete the account.");
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          {/* user info */}
          <Card>
            <Card.Header>
              <UserInfo name={user.userName} email={user.Email} />
            </Card.Header>
            <Card.Body>
              <Button variant="danger" onClick={handleProfileDelete}>
                Delete Account
              </Button>
            </Card.Body>
          </Card>
          {/* fav movies */}
          <Card>
            <Card.Header>
              <FavoriteMovies
                user={user}
                favoriteMovieList={user.favoriteMovies || []}
              />
            </Card.Header>
          </Card>
        </Col>
        {/* Display Movie List to Add to Favorites */}
        <Row>
          {loading ? (
            <p>Loading movies...</p>
          ) : movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Col key={movie._id}>
                <MovieCard
                  movie={movie}
                  user={user}
                  token={token}
                  onMovieAdded={handleMovieAdded}
                />
              </Col>
            ))
          ) : (
            <p>No movies available to display</p>
          )}
        </Row>

        <Card>
          <Card.Body>
            <UpdateUser user={user} token={token} updatedUser={updatedUser} />
          </Card.Body>
          <Card.Body>
            <Button
              variant="danger"
              onClick={() => {
                ProfileDelete();
              }}
            >
              Delete account
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
