import "./movie-view.scss";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const MovieView = ({ movieData, onBackClick }) => {
  return (
    <>
      <Image src={movieData.ImageUrl} fluid rounded />

      <ListGroup>
        <ListGroup.Item>
          <strong>Title:</strong> {movieData.Title}
        </ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item>
          <strong>Description:</strong> {movieData.Description}
        </ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item>
          <strong>ReleaseDate:</strong> {movieData.ReleaseDate}
        </ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item>
          <strong>Cast:</strong> {movieData.Cast}
        </ListGroup.Item>
      </ListGroup>

      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              <strong>Genre</strong>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ListGroup>
              <ListGroup.Item>
                <strong>Name: </strong> {movieData.Genre.Name}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item>
                <strong>Description: </strong> {movieData.Genre.Description}
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal.Dialog>
      </div>

      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              <strong>Director</strong>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ListGroup>
              <ListGroup.Item>
                <strong>Director Name: </strong> {movieData.Director.Name}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item>
                <strong>Description: </strong> {movieData.Genre.Description}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item>
                <strong>Bio: </strong> {movieData.Director.Bio}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item>
                <strong>BirthYear:</strong> {movieData.Director.BirthYear}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item>
                <strong>DeathYear:</strong> {movieData.Director.DeathYear}
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal.Dialog>
      </div>

      <Button
        onClick={onBackClick}
        className="btn btn-primary"
        variant="info"
        style={{ cursor: "pointer" }}
      >
        Back
      </Button>
    </>
  );
};
