// redux/movieActions.js
import axios from 'axios';

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=49a5508b99e54cbf67438655e1565e32`)
      .then((response) => {
        dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error });
      });
  };
};

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS_REQUEST' });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=49a5508b99e54cbf67438655e1565e32`)
      .then((response) => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: error });
      });
  };
};

// redux/movieActions.js
// ...

export const searchMovies = (query) => {
    return (dispatch) => {
      dispatch({ type: 'SEARCH_MOVIES_REQUEST' });
  
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=49a5508b99e54cbf67438655e1565e32&query=${query}`)
        .then((response) => {
          dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data.results });
        })
        .catch((error) => {
          dispatch({ type: 'SEARCH_MOVIES_FAILURE', payload: error });
        });
    };
  };

  // src/redux/movieActions.js
// ...

export const fetchMoviesByCategory = (category) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  
      axios
        .get(`https://api.themoviedb.org/3/movie/${category}?api_key=49a5508b99e54cbf67438655e1565e32`)
        .then((response) => {
          dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.results });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error });
        });
    };
  };
  

  