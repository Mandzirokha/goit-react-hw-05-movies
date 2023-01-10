import { StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
        </li>
      ))}
    </ul>
  );
};
