import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ProjectDetailContent() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={8} lg={7}>
            <Typography gutterBottom variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Libero volutpat sed cras ornare arcu. Ultrices sagittis orci a scelerisque purus semper eget. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Scelerisque fermentum dui faucibus in ornare quam viverra. Ut lectus arcu bibendum at. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Risus quis varius quam quisque id. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Semper quis lectus nulla at volutpat. Morbi tristique senectus et netus. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <div>Images go here</div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default ProjectDetailContent;
