import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <section>
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <div>
        <Link to="reviews">Reviews</Link>
      </div>
    </section>
  );
};
