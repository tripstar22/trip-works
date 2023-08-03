/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom module imports */
import aniType from '../../modules/aniType';

/* custom component imports */
import RevealOnScroll from '../utilities/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_projectdetail.module.scss';

function ProjectDetail() {
  return (
    <div className={classes.projectdetail}>
      <RevealOnScroll dataEnd="top top" dataStart="30% bottom">
        <section className={classes.projectdetail_titleSection}>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography
                  className={classes.projectdetail_heading}
                  component="h1"
                  gutterBottom
                  variant="h1"
                >
                  Georgia Tech Scheller College of Business
                </Typography>
                <Typography
                  className={classes.projectdetail_subheading}
                  component="h2"
                  gutterBottom
                  variant="h4"
                >
                  My Role:{' '}
                  <span
                    className={classes.projectdetail_subheadingJob}
                    id="aniJobTitle"
                    onLoad={aniType(
                      false,
                      0,
                      false,
                      200,
                      'aniJobTitle',
                      false,
                      50,
                      ['Lead Front End Engineer']
                    )}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <main>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography
                  className={classes.projectdetail_content}
                  gutterBottom
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis. Libero volutpat sed cras ornare arcu. Ultrices
                  sagittis orci a scelerisque purus semper eget. Adipiscing at
                  in tellus integer feugiat scelerisque varius morbi enim.
                  Scelerisque fermentum dui faucibus in ornare quam viverra. Ut
                  lectus arcu bibendum at. Facilisis magna etiam tempor orci eu
                  lobortis elementum nibh. Risus quis varius quam quisque id.
                  Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
                  Semper quis lectus nulla at volutpat. Morbi tristique senectus
                  et netus. Mauris in aliquam sem fringilla ut morbi tincidunt
                  augue. Morbi enim nunc faucibus a pellentesque sit amet
                  porttitor eget. Vitae purus faucibus ornare suspendisse sed.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </main>
      </RevealOnScroll>
    </div>
  );
}

export default ProjectDetail;
