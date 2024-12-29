
import React from 'react';
import { Box } from '@mui/material';
import MovieCard from './MovieCard';
import './MovieGrid.scss';

interface MovieGridProps {
  movies: {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
  }[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <Box className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Poster={movie.Poster}
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
        />
      ))}
    </Box>
  );
};

export default MovieGrid;
