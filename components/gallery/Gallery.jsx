// * react imports
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
import classes from './_gallery.module.scss';

function Gallery({ media }) {
  // * state *
  const [open, setOpen] = useState(false);

  // * handlers *
  const toggleModalOpen = function handlerToggleModalOpen() {
    setOpen(true);
  };
  const toggleModalClose = function handlerToggleModalClose() {
    setOpen(false);
  };

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
              <Grid key={index} item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  aria-label={item.fields.title}
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
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
                          component="img"
                          height="100%"
                          src={item.fields.file.url}
                        />
                      ) : item.fields.file.contentType.startsWith('video/') ? (
                        <div className={classes.gallery_item}>
                          <CardMedia
                            alt={item.fields.title}
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
          open={open}
          media={media}
          toggleModalClose={toggleModalClose}
        />
      )}
    </section>
  );
}

Gallery.propTypes = {
  media: PropTypes.array.isRequired,
};

export default Gallery;
