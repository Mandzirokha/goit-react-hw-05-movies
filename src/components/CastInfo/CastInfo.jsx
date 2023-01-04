import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Item, List, Text, Img } from './CastInfostyled';

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
      <List>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <Item key={id}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </Item>
            );
          })}
      </List>
    </section>
  );
};
