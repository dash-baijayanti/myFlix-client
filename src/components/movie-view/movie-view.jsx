export const MovieView = ({ movieData, onBackClick }) => {
  return (
    <div>
      <div>
        <li>
          <img src={movieData.ImageUrl} />
        </li>
      </div>
      <div>
        <li>
          <span>Title: </span>
          <span>{movieData.Title}</span>
        </li>
      </div>
      <div>
        <li>
          <span> Description: </span>
          <span>{movieData.Description}</span>
        </li>
      </div>
      <div>
        <span>
          <h1>Genre : </h1>
        </span>
        <li>
          <span>Name: </span>
          <span>{movieData.Genre.Name}</span>
        </li>
        <li>
          <span>Description: </span>
          <span>{movieData.Genre.Description}</span>
        </li>
      </div>
      <div>
        <span>
          <h1> Director: </h1>
        </span>
        <li>
          {" "}
          <span> Director Name:</span>
          <span>{movieData.Director.Name}</span>
        </li>
        <li>
          {" "}
          <span>Bio: </span>
          <span>{movieData.Director.Bio}</span>
        </li>
        <li>
          <span>BirthYear: </span>
          <span>{movieData.Director.BirthYear}</span>
        </li>
        <li>
          <span> DeathYear: </span>
          <span>{movieData.Director.DeathYear}</span>
        </li>
      </div>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
