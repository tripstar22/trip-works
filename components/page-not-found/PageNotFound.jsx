/* third party library imports */
import PropTypes from 'prop-types';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/* custom component imports */
import AppLink from '../ui/app-link/AppLink';
import BackgroundVideo from '../ui/background-video/BackgroundVideo';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_pagenotfound.module.scss';

function PageNotFound({ pageNotFoundContent }) {
  const { backgroundVideo, backgroundVideoImage, heading, link, text } = pageNotFoundContent;
  const imageUrl = backgroundVideoImage.fields.file.url;
  const videoUrl = backgroundVideo.fields.file.url;
  const { linkHref, linkText } = link;

  return (
    <section className={classes.pagenotfound}>
      <BackgroundVideo
        autoPlay="autoplay"
        loop={true}
        muted={true}
        playsInline={true}
        poster={imageUrl}
        src={videoUrl}
        type="video/mp4"
      />
      <RevealOnScroll end="top 10%" start="30% bottom">
        <div className={classes.pagenotfound_container}>
          <Container maxWidth="lg">
            <Paper className={classes.pagenotfound_inner} elevation={2}>
              <Container maxWidth="md">
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography component="h1" gutterBottom variant="h1">
                      {heading}
                    </Typography>
                    <Typography component="h6" gutterBottom variant="h6">
                      {text}{' '}
                      <AppLink
                        className={classes.pagenotfound_link}
                        href={linkHref}
                      >
                        {linkText}
                      </AppLink>
                      .
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </div>
      </RevealOnScroll>
    </section>
  );
}

PageNotFound.propTypes = {
  pageNotFoundContent: PropTypes.object.isRequired,
};

export default PageNotFound;
