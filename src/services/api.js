import axios from 'axios';

const API_KEY = '5f35438a8b6ed8924b8ebb1073a1c620';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: API_KEY };

export const getTrending = async () => {
  const response = await axios.get('trending/movie/day');
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};
