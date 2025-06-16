import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import Loader from "../../../src/components/Loader/Loader";
import fetchApi from "../../servises/Api";
const HomePage = () => {
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
    return <p>No film</p>;
  }
  return (
    <div className={s.MovieList}>
      <h1 className={s.list_title}>Trending today</h1>
      <MovieList movies={movies} />
      <div className={s.create_linedown}></div>
    </div>
  );
};

export default HomePage;
