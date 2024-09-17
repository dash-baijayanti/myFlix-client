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

  // Fetch movies from the API
  useEffect(() => {
    console.log("User data:", user); // Debug user object
    console.log("Favorite movies:", user.favMovies);

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
        console.log("Fetched movies:", data); // Debug the data coming in
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
        } else {
          alert("Failed to remove movie from favorites");
        }
      })
      .catch((error) => {
        console.error("Error removing movie from favorites:", error);
        alert("An error occurred while trying to remove the movie.");
      });
  };

  // Filter out favorite movies from the movie list
  const favoriteMoviesData = movies.filter((movie) =>
    favoriteMovies.includes(movie._id)
  );

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
        </Col>

        <Card>
          <Card.Body>
            <UpdateUser user={user} updatedUser={updatedUser} />
          </Card.Body>
          {/* <Card.Body>
            <Button
              variant="danger"
              onClick={() => {
                ProfileDelete();
              }}
            >
              Delete account
            </Button>
          </Card.Body> */}
        </Card>

        <Card className="mb-4">
          <Card.Header>
            <FavoriteMovies
              user={user}
              favoriteMovieList={favoriteMoviesData}
              onRemove={handleRemoveFavorites}
            />
          </Card.Header>
          {/* <Card.Body>
            {favoriteMoviesData.length > 0 ? (
              favoriteMoviesData.map((movie) => (
                <div key={movie._id}>
                  <h5>{movie.title}</h5>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFavorites(movie._id)}
                  >
                    Remove From List
                  </Button>
                </div>
              ))
            ) : (
              <p>You have no favorite movies added yet.</p>
            )}
          </Card.Body> */}
        </Card>
      </Row>
    </Container>
  );
};
