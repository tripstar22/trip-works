// * react imports *
import { useEffect, useState } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports
import AppLink from '../ui/app-link/AppLink';
import AppModal from '../app-modal/AppModal';

// * styles imports
import classes from './gallery.module.scss';

function Gallery({ media }) {
  // * state *
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const videoPosters = function createDynamicVideoPosters() {
    const videos = document.querySelectorAll('.videoMedia');

    if (!videos) {
      return;
    }

    videos.forEach((video) => {
      video.setAttribute('poster', '/_assets/img/video-poster.jpg');
    });
  };

  // * handlers *
  const videoPause = function handlerPauseCurrentVideo() {
    const activeSlide = document.querySelector('.slick-slide.slick-active');

    if (activeSlide.querySelector('video')) {
      const videoCurrent = activeSlide.querySelector('video');
      videoCurrent.pause();
    }
  };
  const setCurrentSlide = function handlerSetCurrentSlide(index) {
    setActiveSlideIndex(index);
  };
  const toggleModalOpen = function handlerToggleModalOpen() {
    setOpen(true);
  };
  const toggleModalClose = function handlerToggleModalClose() {
    setOpen(false);
  };

  useEffect(() => {
    /*
      • check userAgent to see which type of device is being used
      • if this component is in the view and iPhone or iPad is being used then run videoPosters(); to dynamically put in poster placeholder for iOS
      • these devices don't show the first frame as the poster if a poster attribute isn't specified
    */
    const { userAgent } = navigator;

    if (
      userAgent.indexOf('iPhone') >= 0
      || userAgent.indexOf('iPad') >= 0
    ) {
      videoPosters();
    }
  }, []);

  return (
    <section className={`section ${classes.gallery}`}>
      <div className={classes.gallery_container}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                className={classes.gallery_heading}
                component="h3"
                gutterBottom
                variant="h3"
              >
                Gallery
              </Typography>
            </Grid>
            {media.map((item, index) => (
              <Grid key={item.fields.file.fileName} item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  aria-label={item.fields.title}
                  className={classes.gallery_link}
                  onClick={(event) => {
                    event.preventDefault();
                    toggleModalOpen();
                    setCurrentSlide(index);
                  }}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      {item.fields.file.contentType.startsWith('image/') ? (
                        <CardMedia
                          alt={item.fields.title}
                          className={classes.gallery_media}
                          component="img"
                          height="100%"
                          src={item.fields.file.url}
                        />
                      ) : item.fields.file.contentType.startsWith('video/') ? (
                        <div className={classes.gallery_item}>
                          <CardMedia
                            className={`${classes.gallery_media} videoMedia`}
                            component="video"
                            height="100%"
                            src={item.fields.file.url}
                          />
                          <div className={classes.gallery_video}>
                            <div className={classes.gallery_videoContainer}>
                              <div className={classes.gallery_videoPlay}>
                                <div
                                  className={classes.gallery_videoPlayTriangle}
                                />
                              </div>
                              <Typography className={classes.gallery_videoText}>
                                Watch Video
                              </Typography>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Typography variant="body1">
                          Unsupported media type.
                        </Typography>
                      )}
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {open && (
        <AppModal
          activeSlideIndex={activeSlideIndex}
          media={media}
          open={open}
          setCurrentSlide={setCurrentSlide}
          toggleModalClose={toggleModalClose}
          videoPause={videoPause}
        />
      )}
    </section>
  );
}

Gallery.propTypes = {
  media: PropTypes.array.isRequired,
};

export default Gallery;
