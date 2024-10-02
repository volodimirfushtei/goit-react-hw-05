import {
  useOutletContext,
  useParams,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const { cast } = useOutletContext();
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!cast || cast.length === 0) {
    return <p className={s.avalible_cast}>NO cast available</p>;
  }

  return (
    <div className={s.container_cast}>
      <Link
        to={backLink.current}
        className={s.goBack}
        onClick={() => navigate(backLink.current)}
      >
        Go back
      </Link>
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
