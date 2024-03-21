// * react imports *
import { useState } from 'react';

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

  // useEffect(() => {
  //   const videoPoster = function createDynamicVideoPoster() {
  //     const videos = document.querySelectorAll('.videoMedia');

  //     videos.forEach((video) => {
  //       const videoSrc = video.getAttribute('src');
  //       // create temp video element
  //       const tempVideo = document.createElement('video');
  //       let canvas;
  //       let ctx;

  //       tempVideo.setAttribute('src', videoSrc);

  //       // console.log(tempVideo);

  //       tempVideo.addEventListener('loadeddata', () => {
  //         canvas = document.createElement('canvas');
  //         const { videoHeight, videoWidth } = tempVideo;
  //         // console.log(videoWidth, videoHeight);
  //         canvas.width = videoWidth;
  //         canvas.height = videoHeight;

  //         ctx = canvas.getContext('2d');

  //         // console.log(canvas);
  //       });

  //       tempVideo.addEventListener('seeked', () => {
  //         if (!ctx) {
  //           console.error('Canvas context is not initialized.');
  //           return;
  //         }
  //         console.log('ctx', ctx);
  //         ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
  //         const dataUrl = canvas.toDataURL('image/jpeg');
  //         console.log(dataUrl);
  //         video.setAttribute('poster', dataUrl);
  //       });
  //     });
  //   };

  //   videoPoster();
  //   // document.addEventListener('DOMContentLoaded', videoPoster);

  //   // return () => {
  //   //   document.removeEventListener('DOMContentLoaded', videoPoster);
  //   // };
  // }, []);

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
                            alt={item.fields.title}
                            className={classes.gallery_media}
                            component="video"
                            height="100%"
                            preload="metadata"
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
