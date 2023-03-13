import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function PageNotFound() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom>Sorry, this page does not exist, or has been removed.</Typography>
            <Typography variant="body1" gutterBottom>
              Feel free to visit the <Link href="/">home page</Link>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default PageNotFound;
