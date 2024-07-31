export const MovieView = ({ movieData, onBackClick }) => {
  return (
    <div>
      <div>
        <li>
          <img src={movieData.imageUrl} />
        </li>
      </div>
      <div>
        <li>
          <span>Title: </span>
          <span>{movieData.title}</span>
        </li>
      </div>
      <div>
        <li>
          <span> Description: </span>
          <span>{movieData.description}</span>
        </li>
      </div>
      <div>
        <li>
          <span>ReleaseDate</span>
          <span>{movieData.releaseDate}</span>
        </li>
      </div>
      <div>
        <li>
          <span>Cast:</span>
          <span>{movieData.cast}</span>
        </li>
      </div>
      <div>
        <span>
          <h1>Genre : </h1>
        </span>
        <li>
          <span>Name: </span>
          <span>{movieData.genre.name}</span>
        </li>
        <li>
          <span>Description: </span>
          <span>{movieData.genre.description}</span>
        </li>
      </div>
      <div>
        <span>
          <h1> Director: </h1>
        </span>
        <li>
          {" "}
          <span> Director Name:</span>
          <span>{movieData.director.name}</span>
        </li>
        <li>
          {" "}
          <span>Bio: </span>
          <span>{movieData.director.bio}</span>
        </li>
        <li>
          <span>BirthYear: </span>
          <span>{movieData.director.birthYear}</span>
        </li>
        <li>
          <span> DeathYear: </span>
          <span>{movieData.director.deathYear}</span>
        </li>
      </div>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
