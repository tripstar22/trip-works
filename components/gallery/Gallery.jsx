/* react imports */
import { useState } from 'react';

/* mui imports */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import AppLink from '../ui/app-link/AppLink';
import AppModal from '../app-modal/AppModal';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_gallery.module.scss';

function Gallery() {
  const [open, setOpen] = useState(false);

  const toggleModalOpen = function handlerToggleModalOpen() {
    setOpen(true);
  };

  const toggleModalClose = function handlerToggleModalClose() {
    setOpen(false);
  };

  return (
    <section className={`section ${classes.gallery}`}>
      <RevealOnScroll
        aniTyped={true}
        end="top top"
        speed={1.25}
        start="50% bottom"
        text="Gallery"
        textElement="#aniTextGallery"
      >
        <div className={classes.gallery_container}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  gutterBottom
                  id="aniTextGallery"
                  variant="h3"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  ariaLabel="thumbnail"
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      <CardMedia
                        alt="write description here"
                        component="img"
                        height="100%"
                        image="https://picsum.photos/1800/1013"
                      />
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  ariaLabel="thumbnail"
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      <CardMedia
                        alt="write description here"
                        component="img"
                        height="100%"
                        image="https://picsum.photos/1800/1013"
                      />
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  ariaLabel="thumbnail"
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      <CardMedia
                        alt="write description here"
                        component="img"
                        height="100%"
                        image="https://picsum.photos/1800/1013"
                      />
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  ariaLabel="thumbnail"
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      <CardMedia
                        alt="write description here"
                        component="img"
                        height="100%"
                        image="https://picsum.photos/1800/1013"
                      />
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <AppLink
                  href="#"
                  ariaLabel="thumbnail"
                  className={classes.gallery_link}
                  onClick={toggleModalOpen}
                >
                  <Card>
                    <CardActionArea
                      className={classes.gallery_action}
                      component="div"
                      tabIndex={-1}
                    >
                      <CardMedia
                        alt="write description here"
                        component="img"
                        height="100%"
                        image="https://picsum.photos/1800/1013"
                      />
                    </CardActionArea>
                  </Card>
                </AppLink>
              </Grid>
            </Grid>
          </Container>
        </div>
        {open && <AppModal open={open} toggleModalClose={toggleModalClose} />}
      </RevealOnScroll>
    </section>
  );
}

export default Gallery;
