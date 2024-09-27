import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UserInfo from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
// import { RemoveFavoriteMovies } from "./remove-favorite-movies";

export const ProfileView = ({ user, token, updatedUser, onLoggedOut }) => {
  // const [removeFavoriteList, setRemoveFavoriteList] = useState( removeFavoriteList || []);
  const [favoriteMovies, setFavoriteMovies] = useState(user.favMovies || []);
  const [movies, setMovies] = useState([]); // State to store movies
  const [loading, setLoading] = useState(true); // State to manage loading

  // Filter out favorite movies from the movie list
  const favoriteMoviesData = movies.filter((movie) =>
    favoriteMovies.includes(movie._id)
  );

  // Function to handle adding a movie to favorites
  const handleAddFavorites = (movieId) => {
    const updatedFavorites = [...favoriteMovies, movieId];
    setFavoriteMovies(updatedFavorites);

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed to add movie to favorites");
        }
      })
      .then((updatedUserResponse) => {
        // Update user state and local storage
        updatedUser(updatedUserResponse);
        localStorage.setItem("user", JSON.stringify(updatedUserResponse));
        alert("Movie added to favorites!");
      })
      .catch((error) => {
        console.error("Error adding movie to favorites:", error);
        alert("An error occurred while adding the movie.");
      });
  };

  // Fetch movies from the API
  useEffect(() => {
    fetch("https://movie-api-7rmr.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, [token]);

  // Function to handle removing a movie from favorites
  const handleRemoveFavorites = (movieId) => {
    const updatedFavorites = favoriteMovies.filter((id) => id !== movieId);
    setFavoriteMovies(updatedFavorites);
    fetch(
      `https://movie-api-7rmr.onrender.com/users/${user.userName}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Movie removed from favorites successfully!");
          alert("Movie removed from favorites successfully!");
          return response.json();
        } else {
          alert("Failed to remove movie from favorites");
        }
      })
      .then((user) => {
        updatedUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })

      .catch((error) => {
        console.error("Error removing movie from favorites:", error);
        alert("An error occurred while trying to remove the movie.");
      });
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
    <Container className="profile">
      <Row className="justify-content-center" w-100>
        <Col>
          {/* user info */}
          <Card  md={6}>
            <Card.Header>
              <UserInfo name={user.userName} email={user.Email} />
            </Card.Header>
            <Card.Body>
              {/* <Row className="justify-content-md-center"> */}
              <Button
                className="updateAccount"
                variant="danger"
                onClick={handleProfileDelete}
              >
                Delete Account
              </Button>
              {/* </Row> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card  md={6}>
            <Card.Body>
              <UpdateUser user={user} updatedUser={updatedUser} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <FavoriteMovies
                user={user}
                favoriteMovieList={favoriteMoviesData}
                onRemove={handleRemoveFavorites}
                onAdd={handleAddFavorites}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
