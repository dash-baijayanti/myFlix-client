import React from "react";
import { Form, Card, CardGroup, Button } from "react-bootstrap";

export default function UpdateUser({ handleSubmit, handleUpdate }) {
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
              name="email"
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
}
