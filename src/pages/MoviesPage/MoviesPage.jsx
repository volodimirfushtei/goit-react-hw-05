// MoviesPage.jsx
import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import fetchMovieSearch from "../../servises/Api.js";
import { Link } from "react-router-dom"; // Додано для навігації

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query.trim()) {
      const fetchMoviesByQuery = async () => {
        setLoading(true);
        setError(null); // Скидаємо помилку перед запитом
        try {
          console.log("Fetching movies for query:", query);
          const results = await fetchMovieSearch(query);
          setMovies(results); // Зберігаємо отримані фільми
        } catch (error) {
          console.log(error, "Fetching movies");
          setError("Не вдалося виконати пошук."); // Встановлюємо помилку
          toast.error("Не вдалося виконати пошук.");
        } finally {
          setLoading(false);
        }
      };

      fetchMoviesByQuery();
    } else {
      setMovies([]); // Скидаємо список, якщо запит порожній
    }
  }, [query]);

  return (
    <div className={s.MoviesPage_w}>
      <SearchForm onSubmit={handleChangeQuery} />
      {loading && <p>Завантаження...</p>}
      {error && <p className={s.error}>{error}</p>} {/* Відображення помилки */}
      <ul>
        {movies.length > 0
          ? movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          : !loading && (
              <p className={s.SearchForm_mesage}>Фільми не знайдені.</p>
            )}
      </ul>
    </div>
  );
};

export default MoviesPage;
