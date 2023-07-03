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
import classes from './_about.module.scss';

function About() {
  return (
    <section
      className={`section section___noPaddingBottom ${classes.about}`}
      id="about"
    >
      <div className={classes.about_container}>
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
                  <span className={classes.about_name}>Trip Pruitt: </span>
                  <span
                    id="aniTextRotating"
                    onLoad={aniType(
                      true,
                      25,
                      false,
                      200,
                      'aniTextRotating',
                      true,
                      50,
                      [
                        'Team ^50 player',
                        'Self proclaimed ^150 grill master',
                        'Non-discriminatory beer ^100 appreciator',
                        'Has a dire wolf ^100 named Riley',
                        'Loves ^50 Kelsey',
                        'OG ^150 Bama fan',
                        'One of four ^100 kids',
                        'Can fit in ^150 anywhere',
                        'Not going to ^100 rage quit',
                        'The Trip ^50 is because I’m ^100 the III',
                      ]
                    )}
                  ></span>
                </Typography>
                <Typography gutterBottom variant="body1">
                  From inner city Boston to Alabama fraternities, I’ve never
                  found a place I wasn’t able to fit in.
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
      </div>
      <Location />
    </section>
  );
}

export default About;
