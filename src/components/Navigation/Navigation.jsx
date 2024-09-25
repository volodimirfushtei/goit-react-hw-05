import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={s.nav_wrapp}>
      <ul className={s.Navigation_list}>
        <li className={s.NavLink}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={s.NavLink}>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
