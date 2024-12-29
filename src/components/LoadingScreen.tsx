
import React from 'react';
import { Box, Typography } from '@mui/material';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <Box className="loading-screen">
      <div className="loading-reel" />
      <Typography variant="h5" className="loading-text">
        Loading Movie List...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
