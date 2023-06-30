/* react imports */
import React from 'react';

/* mui icon imports */
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/* custom module imports */
import aniType from '../../modules/aniType';

/* custom component imports */
import AppLink from '../ui/AppLink';

/* svg imports */
import LogoSecondary from '../../src/svg/logos/logoSecondary.svg';

/* styles imports */
import classes from './_footer.module.scss';

function AppFooter() {
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={classes.footer_heading}
              component="h3"
              gutterBottom 
              id="aniFooterHeading"
              onLoad={aniType(
                false, 
                0, 
                false, 
                200, 
                'aniFooterHeading', 
                false, 
                50, 
                ['Front-End ^300 Engineer']
              )}
              variant="h4"  
            >
              Trip Pruitt - Front End Engineer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <nav>
              <List>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink
                      href="/"
                    >
                      Home
                    </AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink 
                      href="/#about"
                    >
                      About
                    </AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink 
                      href="/#skills"
                    >
                      Skills
                    </AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink 
                      href="/#work"
                    >
                      Work
                    </AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink 
                      href="/#contact"
                    >
                      Contact
                    </AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem className={classes.footer_listItem}>
                  <ListItemButton>
                    <AppLink 
                      href="/files/trip-pruitt-resume.pdf"  
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      View Résumé
                    </AppLink>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack direction="row" spacing={1}>
              <div className={classes.footer_social}>
                <a
                  href="http://www.linkedin.com/in/trip-pruitt-430b2b58"
                  aria-label="View LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton aria-label="linkedin">
                    <LinkedIn />
                  </IconButton>
                </a>
                <a
                  href="https://github.com/tripstar22/"
                  aria-label="View GitHub Profile"
                  target="_blank"
                  rel="noreferrer"
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
      <div className={classes.footer_logo}>
        <LogoSecondary className={classes.footer_logoLogo} />
      </div>
    </footer>
  );
}

export default AppFooter;
