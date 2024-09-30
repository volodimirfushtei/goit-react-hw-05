import { Outlet, useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchApi from "../../servises/Api";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../../src/components/Loader/Loader";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchApi.fetchMovieById(movieId);
        setMovie(data);
        const reviewsData = await fetchApi.fetchMovieReviews(movieId);
        setReviews(reviewsData.results || []);
      } catch (error) {
        console.error(error);
        setError("Не вдалося завантажити інформацію про фільм.");
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
      <div className={s.card_container_item}>
        <img
          className={s.image}
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <div className={s.card_text_container}>
          <h2 className={s.title}>{movie.title}</h2>
          <p className={s.overview}>{movie.overview}</p>
          <p className={s.average}>Рейтинг: {movie.vote_average}</p>
          <p className={s.date}>
            Рік: {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
          <p className={s.genre}>
            Жанри: {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className={s.time}>Тривалість: {movie.runtime} хвилин</p>
          <p className={s.production_companies}>
            Виробництво:{" "}
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
          <p className={s.budget}>Бюджет: {movie.budget}</p>
        </div>
      </div>
      <div className={s.Links}>
        {location.pathname !== `/movies/${movieId}/cast` && (
          <Link
            className={s.Link}
            to={`/movies/${movieId}/cast`}
            state={{ from: location.pathname }}
          >
            Cast
          </Link>
        )}
        {location.pathname !== `/movies/${movieId}/reviews` && (
          <Link
            className={s.Link}
            to={`/movies/${movieId}/reviews`}
            state={{ from: location.pathname }}
          >
            Reviews
          </Link>
        )}
        <Outlet context={{ cast: movie.credits.cast, reviews }} />
        <Link className={s.Link} to="/" state={{ from: location.pathname }}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
