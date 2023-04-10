const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'api_key=6628254a4cb0b774890e6f0759ab9dd7';
const MOST_POPULAR_FILMS = '/trending/movie/day';
const SEARCH_FILMS_API = '/search/movie';

const fetchTopMovies = async () => {
  try {
    const response = await fetch(`
  ${BASE_URL}${MOST_POPULAR_FILMS}?${KEY}&language=en`);
    if (response.ok) {
      const result = await response.json();
      return result.results;
    } else throw new Error(`Bad request${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

const fetchFindMovies = async query => {
  try {
    const response = await fetch(
      `${BASE_URL}${SEARCH_FILMS_API}?${KEY}&language=en&query=${query}`
    );
    if (response.ok) {
      const result = await response.json();
      return result.results;
    } else throw new Error(`Bad request${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieToId = async id => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?${KEY}&language=en-US`
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    } else throw new Error(`Bad request${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

const fetchActorMovieToId = async id => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?${KEY}&language=en-US`
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    } else throw new Error(`Bad request${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieReviewsToId = async id => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/reviews?${KEY}&language=en-US`
    );
    if (response.ok) {
      const result = await response.json();
      return result.results;
    } else throw new Error(`Bad request${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

const API_FETCH = {
  fetchTopMovies,
  fetchFindMovies,
  fetchMovieToId,
  fetchActorMovieToId,
  fetchMovieReviewsToId,
};
export default API_FETCH;
