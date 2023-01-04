import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Outlet } from 'react-router-dom';
import { AboutMovieInfo } from 'components/AboutMovieInfo/AboutMovieInfo';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovieDetails(response);
    });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      {movieDetails && (
        <AboutMovieInfo
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
      )}
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
