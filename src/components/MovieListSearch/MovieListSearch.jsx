import { Link, useLocation } from "react-router-dom";
import s from "./MovieListSearch.module.css";

const MovieListSearch = ({ movies }) => {
  const location = useLocation(); // Отримуємо поточне місцезнаходження

  return (
    <ul className={s.movies_list}>
      {movies.map((movie) => (
        <li className={s.movies_list_item} key={movie.id}>
          <div className={s.create_line}></div>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListSearch;
