import s from "./MovieList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchApi from "../../servises/Api";
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
        const data = await fetchApi.fetchMovies();
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
    return <Loader />;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }
  if (!movies || movies.length === 0) {
    return <p>Не вдалося завантажити фільми.</p>;
  }
  return (
    <>
      <h2 className={s.list_title}>Trending today</h2>
      <ul className={s.Movie_list}>
        {movies.map((movie) => (
          <li className={s.MovieList_item} key={movie.id}>
            <div className={s.create_line}></div>
            <Link to={`/movies/${movie.id}`} className={s.list_link}>
              <h3 className={s.movietitle}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
