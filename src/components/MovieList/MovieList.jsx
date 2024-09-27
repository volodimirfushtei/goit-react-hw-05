import s from "./MovieList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchMovies from "../../../src/servises/Api.js";
import Loader from "../../../src/components/Loader/Loader";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
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
    <div className={s.MovieList_container}>
      <h2 className={s.list_title}>Список Фільмів</h2>
      <ul className={s.MovieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h3 className={s.movietitle}>{movie.title}</h3>
              <img
                className={s.movieimage}
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt="{movie.title}"
              />
              <div className={s.Movieoverview_container}>
                <p className={s.overview}>{movie.overview}</p>
              </div>
              <p className={s.vote_average}>Рейтинг: {movie.vote_average}</p>
              <p className={s.data}>
                Рік:{" "}
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
