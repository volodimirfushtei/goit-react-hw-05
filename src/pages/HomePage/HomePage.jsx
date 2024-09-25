import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.MovieList}>
      <MovieList />
    </div>
  );
};

export default HomePage;
