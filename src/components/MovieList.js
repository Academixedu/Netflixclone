// src/components/MovieList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import Pagination from './Pagination';
import './MovieList.css';

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loading, error } = useSelector((state) => state.movies);

  const moviesPerPage = 10;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  return (
    <div className="movie-list">
      <Grid container spacing={4}>
        {currentMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="400"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className="movie-title">
                    {movie.title}
                  </Typography>
                  <Rating
                    name="movie-rating"
                    value={movie.vote_average / 2}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MovieList;