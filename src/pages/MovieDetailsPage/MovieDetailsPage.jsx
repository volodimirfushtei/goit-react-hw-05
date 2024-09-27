import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Імпорт useState і useEffect
import MovieCast from "../../components/MovieCast/MovieCast"; // Виправте шлях
import MovieReviews from "../../components/MovieReviews/MovieReviews"; // Виправте шлях
import { fetchMovieById } from "../../servises/Api"; // Виправте шлях
import s from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Зміна назви з movies на movie
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      setLoading(true); // Початок завантаження
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message); // Встановлення помилки
      } finally {
        setLoading(false); // Завершення завантаження
      }
    };

    fetchMovieDetails(); // Виклик функції
  }, [movieId]);

  if (loading) {
    return <p>Завантаження...</p>; // Показати повідомлення про завантаження
  }

  if (error) {
    return <p>Помилка: {error}</p>; // Показати повідомлення про помилку
  }

  return (
    <div>
      <h2 className={s.movieTitle}>{movie.title}</h2>
      {movie.credits?.cast && <MovieCast cast={movie.credits.cast} />}
      {movie.reviews?.length > 0 ? (
        <MovieReviews reviews={movie.reviews} />
      ) : (
        <p>Немає відгуків.</p>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
