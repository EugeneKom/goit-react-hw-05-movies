import MovieListMarcup from './MovieListMarcup';

const MovieList = ({ films }) => {
  return (
    <>
      <h1>Trending today</h1>
      <MovieListMarcup films={films} />
    </>
  );
};

export default MovieList;
