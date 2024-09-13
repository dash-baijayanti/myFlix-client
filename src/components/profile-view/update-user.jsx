import React from "react";
import { useState } from "react";
import { Form, Card, CardGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateUser = ({ user, updatedUser }) => {
  const token = localStorage.getItem("token");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      Email: email,
      birthDate: birthday,
    };

    fetch(`https://movie-api-7rmr.onrender.com/users/${user.userName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Update successful!");
          return response.json();
        } else {
          alert("Update failed!");
        }
      })
      .then((data) => {
        updatedUser(data);
        setUsername(data.userName);
        setPassword(data.password);
        setEmail(data.Email);
        setBirthday(data.birthDate);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <CardGroup>
      <Card>
        <h2>Want To Change some info?</h2>
        <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group contolId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              defaultValue={user.userName}
              onChange={(e) => handleUpdate(e)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={(e) => handleUpdate(e)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              defaultValue={user.Email}
              onChange={(e) => handleUpdate(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Card>
    </CardGroup>
  );
};

UpdateUser.propTypes = {
  user: PropTypes.object.isRequired,
  updatedUser: PropTypes.func.isRequired,
};
