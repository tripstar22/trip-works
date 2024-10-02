// * third party library imports *
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// * mui imports *
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// * custom component imports *
import AppLink from '../ui/app-link/AppLink';
import RevealOnScroll from '../ui/reveal-on-scroll/RevealOnScroll';

// * styles imports *
import classes from './labs.module.scss';

function Labs() {
  return (
    <section id="labs" className={`section ${classes.labs}`}>
      <RevealOnScroll
        // aniTyped
        end="top 10%"
        speed={1.25}
        start="15% bottom"
        text="Some cool things I've done in my spare time"
        textElement="#aniTextLabs"
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Typography
                className={classes.labs_heading}
                aria-label="Some cool things I've done in my spare time"
                component="h3"
                gutterBottom
                id="aniTextLabs"
                variant="h3"
              >
                Things I&apos;ve built on my own
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.labs_container}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 599: 2, 899: 3 }}
            >
              <Masonry gutter="30px">
                <div>
                  <AppLink href="#" className={classes.labs_link}>
                    <Card className={classes.labs_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt=""
                          component="img"
                          height="220"
                          image="https://picsum.photos/500/300"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Lorem ipsum dolor sit amet
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink href="#" className={classes.labs_link}>
                    <Card className={classes.labs_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt=""
                          component="img"
                          height="220"
                          image="https://picsum.photos/500/300"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Consectetur adipiscing elit
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
                <div>
                  <AppLink href="#" className={classes.labs_link}>
                    <Card className={classes.labs_card}>
                      <CardActionArea component="div" tabIndex={-1}>
                        <CardMedia
                          alt=""
                          component="img"
                          height="220"
                          image="https://picsum.photos/500/300"
                        />
                        <CardContent>
                          <Typography
                            className={classes.projects_projectHeading}
                            component="h5"
                            gutterBottom
                            variant="h5"
                          >
                            Etiam turpis elit varius sit amet vulputate
                          </Typography>
                          <Typography
                            className={classes.projects_more}
                            variant="body1"
                          >
                            Learn More
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </AppLink>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

Labs.propTypes = {};

export default Labs;
