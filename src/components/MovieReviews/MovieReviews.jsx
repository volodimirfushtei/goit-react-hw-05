import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { reviews } = useOutletContext();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);
  if (!Array.isArray(reviews)) {
    return <p>No reviews </p>;
  }
  if (!reviews || reviews.length === 0) {
    return <p className={s.avalible_reviews}>No reviews available</p>;
  }

  return (
    <div className={s.reviews_container}>
      <h3 className={s.reviews}>Reviews</h3>
      <ul className={s.reviews_list}>
        {reviews.map((review) => (
          <li className={s.reviews_item} key={review.id}>
            <h4 className={s.author}>{review.author}</h4>
            <p className={s.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
