import s from "./MovieList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchMovies from "../../../src/servises/Api.js";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div className={s.MovieList_container}>
      <h2 className={s.list_title}>Список Фільмів</h2>
      <ul className={s.MovieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3 className={s.movietitle}>{movie.title}</h3>
            <img
              className={s.movieimage}
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt="{movie.title}"
            />
            <p>{movie.description}</p>
            <p>Рейтинг: {movie.vote_average}</p>
            <p>
              Рік:{" "}
              {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
