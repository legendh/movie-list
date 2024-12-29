
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MovieCard.scss';
import brokenImage from '../assets/img/broken-image.svg';

interface MovieCardProps {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ imdbID, Poster, Title, Year, Type }) => {
  const navigate = useNavigate();
  const isPoster = Poster !== 'N/A' ;

  return (
    <Card className="movie-card" onClick={() => navigate(`/movie/${imdbID}`)}>
      <CardMedia
        component="img"
        image={isPoster ? Poster : brokenImage}
        alt={Title}
        className={isPoster ? "movie-card-media": "movie-card-media movie-card-media-no-image"  }
      />
      <CardContent className="movie-card-content">
        <Typography variant="h6" className="movie-card-title">
          {Title}
        </Typography>
        <Typography variant="body2" className="movie-card-year">
          Year: {Year}
        </Typography>
        <Typography variant="body2" className="movie-card-type">
          Type: {Type.charAt(0).toUpperCase() + String(Type).slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
