import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Trip Pruitt
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Front End Engineer
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Trip Pruitt: 
        </Typography>
        <Typography variant="body1" gutterBottom>
          From inner city Boston to Alabama fraternities, I’ve never found a place I wasn’t able to fit in.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Product of being a Navy brat, I guess.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I’m adaptable.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I’ll talk sports and grill anywhere and with anyone.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I approach software engineering the same way.
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Work
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Contact
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
