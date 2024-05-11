// src/components/MovieDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { fetchMovieDetails } from '../redux/movieActions';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  if (!movieDetails) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt={movieDetails.title}
              height="600"
              image={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {movieDetails.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {movieDetails.overview}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Release Date: {movieDetails.release_date}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Rating: {movieDetails.vote_average}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;