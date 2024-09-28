import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { fetchMovieById, fetchMovieReviews } from "../../servises/Api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);

        const reviewsData = await fetchMovieReviews(movieId); // Отримуємо відгуки
        setReviews(reviewsData.results); // Зберігаємо відгуки у стані
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div>
      <h2 className={s.movieTitle}>{movie.title}</h2>
      {movie.credits?.cast && <MovieCast cast={movie.credits.cast} />}
      {reviews.length > 0 ? (
        <MovieReviews reviews={reviews} />
      ) : (
        <p className={s.reviews}>No review found</p>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
