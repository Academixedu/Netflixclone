// redux/movieActions.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_MOVIES_REQUEST" });

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        dispatch({
          type: "FETCH_MOVIES_SUCCESS",
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error });
      });
  };
};

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_MOVIE_DETAILS_REQUEST" });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        dispatch({
          type: "FETCH_MOVIE_DETAILS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MOVIE_DETAILS_FAILURE", payload: error });
      });
  };
};

export const searchMovies = (query) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_MOVIES_REQUEST" });

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then((response) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({ type: "SEARCH_MOVIES_FAILURE", payload: error });
      });
  };
};

export const fetchMoviesByCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_MOVIES_REQUEST" });

    axios
      .get(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
      .then((response) => {
        dispatch({
          type: "FETCH_MOVIES_SUCCESS",
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error });
      });
  };
};
