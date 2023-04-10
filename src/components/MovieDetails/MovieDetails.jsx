import { Outlet, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import API_FETCH from 'components/API/API';
import MovieDetailsMarcup from './MovieDetailsMarcup';

const MovieDetails = () => {
  const [detailsMovie, setdetailsMovie] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    API_FETCH.fetchMovieToId(moviesId).then(setdetailsMovie);
  }, [moviesId]);

  return (
    <>
      {detailsMovie.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <MovieDetailsMarcup detailsMovie={detailsMovie} />
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
