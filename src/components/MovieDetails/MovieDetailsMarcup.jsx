import { Link, useLocation } from 'react-router-dom';
import { MovieDetailsWrapper, MovieInfo } from './MovieDetailsMarcup.styled';

const MovieDetailsMarcup = ({ detailsMovie }) => {
  const {
    title,
    overview,
    genres,
    backdrop_path: moveImg,
    vote_average: userScore,
  } = detailsMovie;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const normilizeMovieScore = `${userScore.toFixed(1)}`.replace('.', '');

  return (
    <MovieDetailsWrapper>
      <Link to={backLinkHref}>Go back</Link>

      <img
        src={`https://image.tmdb.org/t/p/w500${moveImg}`}
        alt={title}
        width={330}
        height={240}
      />
      <div>
        <h2>{title}</h2>
        <MovieInfo>
          <li>User Score {normilizeMovieScore}%</li>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </li>
        </MovieInfo>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            reviews
          </Link>
        </li>
      </ul>
    </MovieDetailsWrapper>
  );
};

export default MovieDetailsMarcup;
