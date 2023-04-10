import React, { useEffect, useState } from 'react';
import API_FETCH from 'components/API/API';
import MovieListMarcup from 'components/MovieList/MovieListMarcup';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSearchMovie = value => {
    API_FETCH.fetchFindMovies(value).then(data => {
      if (data.length === 0) {
        alert(
          'К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить ключевые слова и повторить поиск.'
        );
      }
      setMovies(data);
    });
  };

  const handleAddURL = ({ target }) => {
    if (target.value.trim() === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: target.value });
  };
  useEffect(() => {
    if (query !== '') {
      handleSearchMovie(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSubmit = evt => {
    evt.preventDefault();
    handleSearchMovie(query);
  };
  return (
    <>
      <h1>Movies</h1>
      <form>
        <input type="text" onChange={evt => handleAddURL(evt)} value={query} />
        <button type="submit" onClick={evt => formSubmit(evt)}>
          find
        </button>
      </form>
      <MovieListMarcup films={movies} />
    </>
  );
};

export default Movies;
