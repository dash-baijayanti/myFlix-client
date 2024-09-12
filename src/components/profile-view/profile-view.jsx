import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "./user-info";
import UpdateUser from "./update-user";
import FavoriteMovies from "./favorite-movies";

import axios from "axios";

export const ProfileView = ({  }) => {
  const  { userName } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from the /users endpoint
    axios
      .get("/users")
      .then((response) => {
        // Find the user by the username passed as a prop
        const userData = response.data.find((u) => u.username === userName);
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userName]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-view">
      <h1>{user.userName}'s Profile</h1>
      <div>
        <p>
          <strong>Email:</strong> {user.Email}
        </p>
        {/* <p><strong>Birthday:</strong> {new Date(user.birthday).toLocaleDateString()}</p> */}
      </div>
      {/* <UserInfo /> */}
      {/* Add update profile functionality here */}
    </div>
  );
};
