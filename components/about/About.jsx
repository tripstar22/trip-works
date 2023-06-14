/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom module imports */
import aniType from '../../modules/aniType';

/* custom component imports */
import Location from '../location/Location';

/* styles imports */
import classes from './styles/_about.module.scss';

function About() {
  return (
    <section id="about" className={`section section___noPaddingBottom ${classes.about}`}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5} md={4}>
            <div className={classes.about_image}>
              <div className={classes.about_imageImage} />
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <div className={classes.about_content}>
              <Typography 
                className={classes.about_heading}
                component="h3" 
                gutterBottom 
                variant="h3"
              >
                <span className={classes.about_headingText}>Trip Pruitt: </span>
                <span 
                  className={classes.about_headingText} 
                  id="aniTextRotating"
                  onLoad={aniType(
                    true, 
                    25,
                    false, 
                    200, 
                    'aniTextRotating', 
                    true, 
                    50, 
                    ['TEAM ^50 PLAYER', 'SELF PROCLAIMED ^150 GRILL MASTER', 'NON-DISCRIMINATORY BEER ^100 APPRECIATOR', 'HAS A DIRE WOLF ^100 NAMED RILEY', 'LOVES ^50 KELSEY', 'OG ^150 BAMA FAN', 'ONE OF FOUR ^100 KIDS', 'CAN FIT IN ^150 ANYWHERE', 'NOT GOING TO ^100 RAGE QUIT', 'THE TRIP ^50 IS SHORT FOR ^100 TRIPLE']
                  )}
                >
                  Rotating Text here
                </span>
              </Typography>
              <Typography gutterBottom variant="body1">
                From inner city Boston to Alabama fraternities, I’ve never found a place I wasn’t able to fit in.
              </Typography>
              <Typography gutterBottom variant="body1">
                Product of being a Navy brat, I guess.
              </Typography>
              <Typography gutterBottom variant="body1">
                I’m adaptable.
              </Typography>
              <Typography gutterBottom variant="body1">
                I’ll talk sports and grill anywhere and with anyone.
              </Typography>
              <Typography gutterBottom variant="body1">
                I approach software engineering the same way.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Location />
    </section>
  );
}

export default About;
