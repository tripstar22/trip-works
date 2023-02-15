import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomeHero() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>Trip Pruitt</Typography>
      <Typography variant="h5" component="h2" gutterBottom>Front End Engineer</Typography>
    </Box>
  );
}

export default HomeHero;
