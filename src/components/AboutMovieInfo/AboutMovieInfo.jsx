import PropTypes from 'prop-types';
import { Section, Container, Img, List } from './AboutMovieInfo.styled';

export const AboutMovieInfo = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <Section>
      <Container>
        <Img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
          alt={title}
          width="200"
        />
      </Container>
      <Container>
        <h1>{title}</h1>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <List>
          <h4>Genres</h4>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </List>
      </Container>
    </Section>
  );
};

AboutMovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape),
};
