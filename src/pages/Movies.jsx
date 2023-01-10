import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Outlet } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
// import { ToastContainer } from 'react-toastify';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleInput = async query => {
    return await getSearchMovies(query).then(({ results }) =>
      setMovies(results)
    );
  };

  return (
    <>
      <SearchBar onSubmit={handleInput} />
      <MovieList movies={movies} />
      {/* <ToastContainer autoClose={3000} /> */}
      <Outlet />
    </>
  );
};
