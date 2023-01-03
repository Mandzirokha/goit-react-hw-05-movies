import { useFetchMovie } from 'hooks/useFetchMovie';

export const MovieDetails = () => {
  const movie = useFetchMovie();
  return (
    <main>
      <div>{movie.name}</div>
    </main>
  );
};
