// redux/movieReducer.js
const initialState = {
    movies: [],
    movieDetails: null,
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
      case 'FETCH_MOVIE_DETAILS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_MOVIE_DETAILS_SUCCESS':
        return {
          ...state,
          movieDetails: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_MOVIES_FAILURE':
      case 'FETCH_MOVIE_DETAILS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        // redux/movieReducer.js
// ...

case 'SEARCH_MOVIES_REQUEST':
    return {
      ...state,
      loading: true,
      error: null,
    };
  case 'SEARCH_MOVIES_SUCCESS':
    return {
      ...state,
      movies: action.payload,
      loading: false,
      error: null,
    };
  case 'SEARCH_MOVIES_FAILURE':
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  // ...
      default:
        return state;
    }
  };
  
  export default movieReducer;