import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = ({ onSubmit }) => {
  const { movieId } = useParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        // Ваш запит API
        console.log("Fetching movie details for ID:", movieId);
      } catch (error) {
        console.log(error, "Fetching movie details");
        toast.error("Не вдалося отримати дані про фільм.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (query.trim()) {
      const fetchMovies = async () => {
        try {
          toast.success("Запит для пошуку успішно введено");
          console.log("Search params:", { query });
          onSubmit(query); // Викликаємо onSubmit з запитом
        } catch (error) {
          console.log(error, "Fetching movies");
          toast.error("Не вдалося виконати пошук.");
        }
      };

      fetchMovies();
    }
  }, [query, onSubmit]);

  return (
    <div className={s.MoviesPage_w}>
      <SearchForm query={query} setQuery={setQuery} />
    </div>
  );
};

export default MoviesPage;
