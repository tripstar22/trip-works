import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutMe() {
  return (
    <section id="about">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>Trip Pruitt: </Typography>
        <Typography variant="body1" gutterBottom>From inner city Boston to Alabama fraternities, I’ve never found a place I wasn’t able to fit in.</Typography>
        <Typography variant="body1" gutterBottom>Product of being a Navy brat, I guess.</Typography>
        <Typography variant="body1" gutterBottom>I’m adaptable.</Typography>
        <Typography variant="body1" gutterBottom>I’ll talk sports and grill anywhere and with anyone.</Typography>
        <Typography variant="body1" gutterBottom>I approach software engineering the same way.</Typography>
      </Box>
    </section>
  );
}

export default AboutMe;
