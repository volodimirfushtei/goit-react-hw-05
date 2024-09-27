import { Routes, Route } from "react-router-dom";
import Navigation from "./src/components/Navigation/Navigation";
import HomePage from "./src/pages/HomePage/HomePage";
import MoviesPage from "./src/pages/MoviesPage/MoviesPage";
import NotFoundPage from "./src/pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./src/pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./src/components/MovieCast/MovieCast";
import MovieReviews from "./src/components/MovieReviews/MovieReviews";
// 19ccb5d526bae3cf70acea6c2f2cc1d6

// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiIxOWNjYjVkNTI2YmFlM2NmNzBhY2VhNmMyZjJjYzFkNiIsIm5iZiI6MTcyNzIxMzIxMS4zNTM4MjQsInN1YiI6IjY2ZjMyN2ZjODQxMDk4NzE4NWMxZGZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .jgNiulurOP8bbMSl1S1bTwt1DPITs9nAXK6ONaJeN1g;
function App() {
  return (
    <>
      <header>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
