import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export const useFetchMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  return movie;
};
