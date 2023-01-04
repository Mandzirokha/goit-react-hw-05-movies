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
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {/* <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                alt={title}
                width="250px"
              /> */}
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
