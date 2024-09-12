import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UserInfo from "./user-info";

export const ProfileView = ({ user, token, onLoggedOut }) => {
  console.log(user);
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
      </Row>
    </Container>
  );
};
