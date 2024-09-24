import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

import { Row, Col, Form } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./main-view.scss";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser || null);
  const [token, setToken] = useState(storedToken || null);

  // Added states for search term and genre
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://movie-api-7rmr.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        if (Array.isArray(movies)) {
          setMovies(movies);
        } else {
          console.error("Movies API returned a non-array response", movies);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [token]);

  const handleSearch = (e) => setSearch(e.target.value); // Update search term

  const handleGenreChange = (e) => setSelectedGenre(e.target.value); // Update selected genre

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.Title.toLowerCase().includes(search.toLowerCase()) &&
      (!selectedGenre || movie.Genre.Name === selectedGenre) // Filter by genre if selected
    );
  });

  const onLoggedIn = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  const updatedUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <BrowserRouter>
      <div className="main-view">
        {/* Navigation Bar */}
        <NavigationBar user={user} onLoggedOut={onLoggedOut} />

        <Row className="justify-content-md-center">
          <Routes>
            {/* Profile Route */}
            <Route
              path="/users/:userName"
              element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      token={token}
                      updatedUser={updatedUser}
                      onLoggedOut={onLoggedOut}
                    />
                  </Col>
                )
              }
            />

            {/* Signup Route */}
            <Route
              path="/signup"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )
              }
            />

            {/* Login Route */}
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={onLoggedIn} />
                  </Col>
                )
              }
            />

            {/* Movie Detail View */}
            <Route
              path="/movies/:movieId"
              element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>It's empty.</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )
              }
            />

            {/* Default Home Route */}
            <Route
              path="/"
              element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>There are no movies</Col>
                ) : (
                  <>
                    {/* Search & Filter */}
                    <Row className="justify-content-center mb-5">
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          placeholder="Search movies"
                          value={search}
                          onChange={handleSearch}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Select
                          value={selectedGenre}
                          onChange={handleGenreChange}
                        >
                          <option value="">All genres</option>
                          {[...new Set(movies.map((m) => m.Genre.Name))]
                            .sort()
                            .map((genre) => (
                              <option key={genre} value={genre}>
                                {genre}
                              </option>
                            ))}
                        </Form.Select>
                      </Col>
                    </Row>

                    {/* Render Movie Cards */}
                    <Row>
                      {filteredMovies.length === 0 ? (
                        <Col>No movies found!</Col>
                      ) : (
                        filteredMovies.map((movie) => (
                          <Col
                            className="mb-4"
                            key={movie._id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                          >
                            <MovieCard
                              movieData={movie}
                              isFavorite={user?.FavoriteMovies?.includes(
                                movie._id
                              )}
                            />
                          </Col>
                        ))
                      )}
                    </Row>
                  </>
                )
              }
            />
          </Routes>
        </Row>
      </div>
    </BrowserRouter>
  );
};
