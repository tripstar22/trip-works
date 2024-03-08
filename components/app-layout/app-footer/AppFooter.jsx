// * third party library imports *
import PropTypes from 'prop-types';

// * mui icon imports *
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

// * mui imports *
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// * custom component imports *
import AppLink from '../../ui/app-link/AppLink';
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

// * svg imports *
import LogoSecondary from '/public/svg/logos/logoSecondary.svg';

// * styles imports *
import classes from './_appfooter.module.scss';

function AppFooter({ footerHeading, navigationMain }) {
  // * cms content *
  const { heading } = footerHeading;

  return (
    <footer className={classes.appfooter}>
      <RevealOnScroll
        aniTyped={true}
        end="top top"
        speed={1.25}
        start="bottom bottom"
        text={heading}
        textElement="#aniFooterHeading"
      >
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                className={classes.appfooter_heading}
                aria-label={heading}
                component="h3"
                gutterBottom
                id="aniFooterHeading"
                variant="h4"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <nav>
                <List>
                  {navigationMain.items.items.map((item, index) => (
                    <ListItem
                      key={index}
                      className={classes.appfooter_listItem}
                    >
                      <ListItemButton>
                        <AppLink
                          href={item.href}
                          rel={item.rel}
                          target={item.target}
                        >
                          {item.text}
                        </AppLink>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </nav>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction="row" spacing={1}>
                <div className={classes.appfooter_social}>
                  <a
                    href="http://www.linkedin.com/in/trip-pruitt"
                    aria-label="View LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton aria-label="linkedin">
                      <LinkedIn />
                    </IconButton>
                  </a>
                  <a
                    href="https://twitter.com/TripPruittWorks"
                    aria-label="View X Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton aria-label="X">
                      <XIcon />
                    </IconButton>
                  </a>
                  <a
                    href="https://github.com/tripstar22/"
                    aria-label="View GitHub Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton aria-label="github">
                      <GitHub />
                    </IconButton>
                  </a>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.appfooter_logo}>
          <LogoSecondary className={classes.appfooter_logoLogo} />
        </div>
      </RevealOnScroll>
    </footer>
  );
}

AppFooter.propTypes = {
  footerHeading: PropTypes.object.isRequired,
  navigationMain: PropTypes.object.isRequired,
};

export default AppFooter;
