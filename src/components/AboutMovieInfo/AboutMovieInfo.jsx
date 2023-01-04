import PropTypes from 'prop-types';

export const AboutMovieInfo = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <section>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
          alt={title}
          width="200"
        />
      </div>
      <div>
        <ul>
          <li>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            <p>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

AboutMovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape),
};
