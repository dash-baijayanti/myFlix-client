import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Offcanvas from "react-bootstrap/Offcanvas";
import "./navigation-bar.scss";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="background">
        <Navbar.Brand as={Link} to="/" className="protest-guerrilla-regular ">
          <span className="span">My Flix</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  <span className="nav">Login</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <span className="nav">Signup</span>
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  <span className="nav"> Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to={`/users/${user.userName}`}>
                  <span className="nav"> Profile</span>
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>
                  <span className="nav">Logout</span>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
