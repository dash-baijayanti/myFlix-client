import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      // Email: email,
    };

    fetch("https://movie-api-7rmr.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        //   if (response.ok) {
        //     onLoggedIn(username);
        //   } else {
        //     alert("Login failed");
        //   }
        // });
        response.json()
      )
      .then((data) => {
        console.log("Login response: ", data);
        if (data.users) {
          localStorage.setItem("user", JSON.stringify(data.users));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.users, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {/* <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label> */}
      <button type="submit">Submit</button>
    </form>
  );
};
