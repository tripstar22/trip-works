/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import Carousel from '../carousel/Carousel';

/* styles imports */
import classes from './_projectDetailContent.module.scss';

function ProjectDetailContent() {
  return (
    <main className={classes.projectDetailContent}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} lg={7}>
            <Typography
              className={classes.projectDetailContent_text}
              gutterBottom
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Libero volutpat sed cras ornare arcu. Ultrices sagittis
              orci a scelerisque purus semper eget. Adipiscing at in tellus
              integer feugiat scelerisque varius morbi enim. Scelerisque
              fermentum dui faucibus in ornare quam viverra. Ut lectus arcu
              bibendum at. Facilisis magna etiam tempor orci eu lobortis
              elementum nibh. Risus quis varius quam quisque id. Tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum. Semper quis
              lectus nulla at volutpat. Morbi tristique senectus et netus.
              Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi
              enim nunc faucibus a pellentesque sit amet porttitor eget. Vitae
              purus faucibus ornare suspendisse sed.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Carousel />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default ProjectDetailContent;
