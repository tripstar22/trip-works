/* react imports */
import React from 'react';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* svg imports */
import IconAdobeCC from '../../src/svg/icons/iconAdobeCC.svg';
import IconGit from '../../src/svg/icons/iconGit.svg';
import IconHTML5 from '../../src/svg/icons/iconHtml5.svg';
import IconJavaScript from '../../src/svg/icons/iconJavascript.svg';
import IconNextJS from '../../src/svg/icons/iconNextJS.svg';
import IconNodeJS from '../../src/svg/icons/iconNodeJS.svg';
import IconReact from '../../src/svg/icons/iconReact.svg';
import IconScss from '../../src/svg/icons/iconScss.svg';

/* custom component imports */
import RevealOnScroll from '../utilities/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_skills.module.scss';

function Skills() {
  return (
    <section className={`section ${classes.skills}`} id="skills">
      <RevealOnScroll dataEnd="top 10%" dataStart="90% bottom">
        <Container maxWidth="lg">
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Typography
                className={classes.skills_heading}
                component="h3"
                gutterBottom
                variant="h3"
              >
                A few of my frontend skills
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconHTML5 />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  HTML5
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconJavaScript />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  JavaScript
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconReact />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  React
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconNextJS />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  Next.js
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconNodeJS />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  Node.js
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconScss />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  SCSS
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconGit />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  Git
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.skills_section}>
                <div className={classes.skills_icon}>
                  <IconAdobeCC />
                </div>
                <Typography component="h5" gutterBottom variant="h5">
                  Adobe CC
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default Skills;
