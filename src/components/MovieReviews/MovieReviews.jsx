import s from "./MovieReviews.module.css";

const MovieReviews = ({ reviews }) => {
  if (!reviews) {
    return <p>No reviews</p>;
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
