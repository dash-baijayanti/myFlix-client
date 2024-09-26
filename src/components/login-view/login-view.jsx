import { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Form,
  Row,
  Card,
  CardGroup,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
    };

    fetch("https://movie-api-7rmr.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
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
    <CardGroup>
      <Card>
        <Form onSubmit={handleSubmit}>
          <CardHeader>
            <Card.Title>Login</Card.Title>
          </CardHeader>

          <CardBody>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3"
                placeholder="Enter UserName"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
              />
            </Form.Group>
          </CardBody>

          <CardFooter>
            {/* <Row className="justify-content-md-center"> */}
            <Button variant="primary" type="submit">
              Login
            </Button>
            {/* </Row> */}
          </CardFooter>
        </Form>
      </Card>
    </CardGroup>
  );
};
