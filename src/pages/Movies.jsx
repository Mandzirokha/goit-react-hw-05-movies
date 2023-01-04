import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Outlet, Link } from 'react-router-dom';

import { getSearchMovies } from 'services/api';

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
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
