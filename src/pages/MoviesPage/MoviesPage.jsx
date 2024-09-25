import s from "./MoviesPage.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
const MoviesPage = (onSubmit) => {
  const [query, setQuery] = useState("");
  const placeholder = "Search movies by title";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Введіть запит для пошуку");
      return;
    }

    console.log("Search text:", query);

    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.MoviesPage_w}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.searchBar_input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search images"
        />
      </form>
    </div>
  );
};

export default MoviesPage;
