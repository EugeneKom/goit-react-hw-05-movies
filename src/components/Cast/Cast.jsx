import API_FETCH from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastMarcup from './CastMarcup';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { moviesId: movieId } = useParams();

  useEffect(() => {
    API_FETCH.fetchActorMovieToId(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <>
      <h2>CAST</h2>
      <CastMarcup actors={actors} />
    </>
  );
};

export default Cast;
