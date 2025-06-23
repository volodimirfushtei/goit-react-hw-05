import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieListSearch = ({ movies }) => {
  const location = useLocation(); // Отримуємо поточне місцезнаходження

  if (!movies || movies.length === 0) {
    return <p>No film</p>;
  }
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
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://dummyimage.com/300x450/2c2c2c/ffffff&text=No+Poster"
              }
              alt={movie.title || "No title"}
              className={s.movie_image}
              loading="lazy"
            />
            <div>
              {movie.release_date && !isNaN(Date.parse(movie.release_date)) ? (
                <span className={s.release_date}>
                  ({new Date(movie.release_date).getFullYear()})
                </span>
              ) : (
                <span className={s.release_date}> (N/A) </span>
              )}

              <p className={s.movie_rating}>
                Rating: {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListSearch;
