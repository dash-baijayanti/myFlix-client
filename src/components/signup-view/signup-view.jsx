import { useState } from "react";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      email: email,
      dateOfBirth: dateofbirth,
    };
    fetch("https://movie-api-7rmr.onrender.com/users", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((Response) => {
      if (Response.ok) {
        alert("Signup Successful");
        Window.location.reload();
      } else {
        alert("Signup failed");
      }
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
          required
          minLength={3}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        DateOfBirth:
        <input
          type="date"
          value={dateofbirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
