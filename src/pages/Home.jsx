import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getTrending } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
