import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { List, Item } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(response => {
      setReviews(response.results);
    });
  }, [movieId]);

  return (
    <List>
      {reviews.length === 0 ? (
        <h3>No reviews</h3>
      ) : (
        reviews.map(({ id, content, author }) => (
          <Item key={id}>
            <h3>{author} :</h3>
            <p>{content}</p>
          </Item>
        ))
      )}
    </List>
  );
};
