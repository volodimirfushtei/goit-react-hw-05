import { Routes, Route } from "react-router-dom";
import Navigation from "./src/components/Navigation/Navigation";
import { lazy, Suspense } from "react";

// Lazy
const HomePage = lazy(() => import("./src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./src/pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("./src/pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("./src/pages/MovieDetailsPage/MovieDetailsPage")
);
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
