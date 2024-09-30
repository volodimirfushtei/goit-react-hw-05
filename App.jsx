import { Routes, Route } from "react-router-dom";
import Navigation from "./src/components/Navigation/Navigation";
import HomePage from "./src/pages/HomePage/HomePage";
import MoviesPage from "./src/pages/MoviesPage/MoviesPage";
import NotFoundPage from "./src/pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./src/pages/MovieDetailsPage/MovieDetailsPage";
import { lazy, Suspense } from "react";

const MovieCast = lazy(() => import("./src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./src/components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
