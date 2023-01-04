import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrending } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};
