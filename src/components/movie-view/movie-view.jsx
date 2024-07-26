export const MovieView = (movieData, onBackClick) => {
  return (
    <div>
      <div>
        <img src={movieData.ImageUrl} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movieData.Title}</span>
      </div>
      <div>
        <span> Description: </span>
        <span>{movieData.Description}</span>
      </div>
      <div>
        <span>Genre : </span>
        <span>Name: </span>
        <span>{movieData.Genre.Name}</span>
        <span>Description: </span>
        <span>{movieData.Genre.Description}</span>
      </div>
      <div>
        <span> Director:</span>
        <span> Director Name:</span>
        <span>{movieData.Director.Name}</span>
        <span>Bio: </span>
        <span>{movieData.Director.Bio}</span>
        <span>BirthYear: </span>
        <span>{movieData.Director.BirthYear}</span>
        <span> DeathYear: </span>
        <span>{movieData.Director.DeathYear}</span>
      </div>
      <div>
        <span> ReleaseDate: </span>
        <span>{movieData.ReleaseDate}</span>
      </div>
      <div>
        <span>Cast: </span>
        <span>{movieData.Cast}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
