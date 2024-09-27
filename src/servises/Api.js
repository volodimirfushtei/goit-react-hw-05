import axios from "axios";

const fetchMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=19ccb5d526bae3cf70acea6c2f2cc1d6";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNjYjVkNTI2YmFlM2NmNzBhY2VhNmMyZjJjYzFkNiIsIm5iZiI6MTcyNzI5MTU2MS4xNjg1OTEsInN1YiI6IjY2ZjMyN2ZjODQxMDk4NzE4NWMxZGZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u5fPxm4gb6H3VCrbGAMnZNNO9d3YYeaIVxJ4xvDjBMQ",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const fetchMovieById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=19ccb5d526bae3cf70acea6c2f2cc1d6&append_to_response=credits,reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNjYjVkNTI2YmFlM2NmNzBhY2VhNmMyZjJjYzFkNiIsIm5iZiI6MTcyNzI5MTU2MS4xNjg1OTEsInN1YiI6IjY2ZjMyN2ZjODQxMDk4NzE4NWMxZGZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u5fPxm4gb6H3VCrbGAMnZNNO9d3YYeaIVxJ4xvDjBMQ",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};

const fetchMovieReviews = async (reviews) => {
  const url = `https://api.themoviedb.org/3/movie/movie_id/${reviews}?language=en-US&page=1?api_key=19ccb5d526bae3cf70acea6c2f2cc1d6`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNjYjVkNTI2YmFlM2NmNzBhY2VhNmMyZjJjYzFkNiIsIm5iZiI6MTcyNzI5MTU2MS4xNjg1OTEsInN1YiI6IjY2ZjMyN2ZjODQxMDk4NzE4NWMxZGZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u5fPxm4gb6H3VCrbGAMnZNNO9d3YYeaIVxJ4xvDjBMQ",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
};

export default fetchMovies;
export { fetchMovieById };
export { fetchMovieReviews };
