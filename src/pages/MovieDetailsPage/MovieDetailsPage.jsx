import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import fetchApi from "../../servises/Api";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../../src/components/Loader/Loader";
import { Link } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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
      setError(null);
      try {
        const data = await fetchApi.fetchMovieById(movieId);
        setMovie(data);

        const reviewsData = await fetchApi.fetchMovieReviews(movieId); // Отримуємо відгуки
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
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div className={s.card_container}>
      <img
        className={s.image}
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Рейтинг: {movie.vote_average}</p>
      <p>
        Рік: {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
      </p>

      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
