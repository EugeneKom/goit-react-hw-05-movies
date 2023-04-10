import API_FETCH from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId: movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API_FETCH.fetchMovieReviewsToId(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <h2>REVIEWS</h2>
      <ul>
        {reviews.length === 0 ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Reviews;
