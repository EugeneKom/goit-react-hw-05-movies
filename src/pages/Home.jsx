import React, { useEffect, useState } from 'react';
import API_FETCH from '../components/API/API';
import { useQuery } from 'react-query';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const { data, status } = useQuery('movies', API_FETCH.fetchTopMovies);

  useEffect(() => {
    setFilms([]);
    if (status === 'success')
      data.map(film => {
        return setFilms(prevState => [...prevState, film]);
      });
  }, [data, status]);

  return (
    <>
      <MovieList films={films}></MovieList>
      {status === 'loading' && <p>Loading...</p>}
    </>
  );
};

export default Home;
