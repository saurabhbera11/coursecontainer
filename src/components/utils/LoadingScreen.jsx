import React from 'react';
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Define custom styles for the LoadingScreen component
const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
}));

const LoadingScreen = () => {
  return (
    <StyledBackdrop open={true}>
      <CircularProgress color="inherit" />
      <Typography variant="h6">Loading...</Typography>
    </StyledBackdrop>
  );
};

export default LoadingScreen;
