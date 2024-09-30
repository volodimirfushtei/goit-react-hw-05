import s from "./MovieReviews.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MovieReviews = () => {
  const { reviews } = useOutletContext(); // Отримуємо reviews з контексту
  const { movieId } = useParams(); // Отримуємо movieId

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available</p>; // Якщо немає відгуків
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
      <Link to={`/movies/${movieId}`} className={s.goBack}>
        Go back
      </Link>
    </div>
  );
};

export default MovieReviews;
