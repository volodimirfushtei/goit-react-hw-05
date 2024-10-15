import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieListSearch = ({ movies }) => {
  const location = useLocation(); // Отримуємо поточне місцезнаходження

  return (
    <ul className={s.movies_list}>
      {movies.map((movie, index) => (
        <li className={s.movies_list_item} key={movie.id}>
          <div
            className={`${s.create_line} ${s[`create_line_${index}`]}`}
          ></div>
          <Link
            className={s.Link}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
            {movie.release_date && !isNaN(new Date(movie.release_date)) && (
              <span className={s.release_date}>
                ({new Date(movie.release_date).getFullYear()})
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieListSearch;
