import s from "./MovieCast.module.css";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const MovieCast = () => {
  const { cast } = useOutletContext();
  const { movieId } = useParams(); // Отримуємо movieId
  useEffect(() => {
    if (!movieId) return;
    // Тут ви можете виконати запит на отримання додаткових даних, якщо потрібно
  }, [movieId]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!cast || cast.length === 0) {
    return <p>NO Cast</p>;
  }

  return (
    <div>
      <h3 className={s.actors}>Actors</h3>
      <ul className={s.actors_list}>
        {cast.map((actor) => (
          <li className={s.actors_list_item} key={actor.id}>
            <p className={s.actor_name}>{actor.name}</p>
            <img
              className={s.actors_list_img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width="100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
