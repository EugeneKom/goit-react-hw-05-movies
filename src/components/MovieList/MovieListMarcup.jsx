import { Link, useLocation } from 'react-router-dom';
import { MovieListWrapper } from './MovieListMarcup.styled';

const MovieListMarcup = ({ films }) => {
  const location = useLocation();

  return (
    <MovieListWrapper>
      {films.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        );
      })}
    </MovieListWrapper>
  );
};

export default MovieListMarcup;
