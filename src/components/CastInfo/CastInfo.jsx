import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

export const CastInfo = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(response => {
      setCredits(response.cast);
    });
  }, [movieId]);

  return (
    <section>
      <ul>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
