import { useState } from "react";
import {
  Button,
  Form,
  Card,
  CardGroup,
  CardHeader,
  CardFooter,
  CardBody,
} from "react-bootstrap";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      userName: username,
      password: password,
      Email: email,
      birthDate: birthdate,
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
        window.location.reload();
        alert("welcome");
      } else {
        alert("Signup failed");
      }
    });
  };
  return (
    <CardGroup>
      <Card>
        <Form onSubmit={handleSubmit}>
          <CardHeader>
            <Card.Title> Sign-Up Form</Card.Title>
          </CardHeader>
          <CardBody>
            <Form.Group controlId="formUserName">
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

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Email-Id"
              />
            </Form.Group>

            <Form.Group controlId="formBirthDate">
              <Form.Label>Birth Date:</Form.Label>
              <Form.Control
                type="date"
                value={birthdate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </Form.Group>
          </CardBody>

          <CardFooter>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </CardGroup>
  );
};
