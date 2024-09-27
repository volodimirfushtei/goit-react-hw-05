import { IoIosSearch } from "react-icons/io";
import s from "./Searchform.module.css";
const SearchForm = ({ query, setQuery }) => {
  const placeholder = "Search movies";
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <IoIosSearch className={s.searchBar_icon} />
        <input
          className={s.searchBar_input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search movies"
        />
      </form>
    </div>
  );
};

export default SearchForm;
