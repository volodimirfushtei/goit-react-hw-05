import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.img_container}>
      <img
        src="/src/assets/oops-404-error-with-a-broken-robot-animate.svg   "
        alt="broken link icon"
        className={s.nfimg}
      />
      <h1 className={s.title}>Page Not Found</h1>
      <Link className={s.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
