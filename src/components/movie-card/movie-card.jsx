export const MovieCard = (movieData, onMovieClick) => {
  return (
    <div
      onclick={() => {
        onMovieClick(movieData);
      }}
    >
      {movieData.Title}
    </div>
  );
};
