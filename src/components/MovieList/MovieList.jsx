import s from "./MovieList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchMovies from "../../../src/servises/Api.js";
import Loader from "../../../src/components/Loader/Loader";

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
  if (!movies || movies.length === 0) {
    return <p>Не вдалося завантажити фільми.</p>;
  }
  return (
    <div className={s.MovieList_container}>
      <h2 className={s.list_title}>Tranding today</h2>
      <ul className={s.MovieList}>
        {movies.map((movie) => (
          <li className={s.MovieList_item} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h3 className={s.movietitle}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
