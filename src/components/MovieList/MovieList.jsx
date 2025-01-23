import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieListSearch = ({ movies }) => {
  const location = useLocation(); // Отримуємо поточне місцезнаходження

  // Функція для перевірки коректності дати
  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

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
            {/* Фото фільму */}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={s.movie_image}
              />
            )}
            <div>
              {movie.release_date && isValidDate(movie.release_date) && (
                <span className={s.release_date}>
                  ({new Date(movie.release_date).getFullYear()})
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListSearch;
