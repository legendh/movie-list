import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../api/omdbApi';
import { Box, Typography, Button } from '@mui/material';
import LoadingScreen from '../components/LoadingScreen';
import brokenImage from '../assets/img/broken-image.svg';
import './MovieDetails.scss';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(true);
      }
    };
    getMovieDetails();
  }, [id]);

  if (error) {
    return (
      <Typography color="error" variant="h6">
        Failed to load movie details. Please try again.
      </Typography>
    );
  }

  if (!movie) return <LoadingScreen />;

  const isMoviePoster = movie.Poster !== 'N/A';
  const poster = isMoviePoster ? movie.Poster : brokenImage;

  return (
    <Box
      className={`movie-details-container ${isMoviePoster ? 'has-poster' : ''}`}
      style={{ '--poster-image': `url(${poster})` }}
    >
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Back to List
      </Button>
      <Box className="movie-details-content">
        <Box component="img" src={poster} alt={movie.Title} className="movie-poster" />
        <Box className="movie-info">
          <Typography variant="h3" className="movie-title">
            {movie.Title || 'Title Not Available'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>Duration:</strong> {movie.Runtime || 'Not Available'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>Genre:</strong> {movie.Genre || 'Not Available'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>Director:</strong> {movie.Director || 'Not Available'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>Cast:</strong> {movie.Actors || 'Not Available'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>IMDb Rating:</strong> {movie.imdbRating || 'Not Rated'}
          </Typography>
          <Typography variant="body1" className="movie-detail">
            <strong>Plot:</strong> {movie.Plot || 'Not Available'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
