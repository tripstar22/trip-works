import React from 'react';

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AppLink from '../ui/AppLink/AppLink';

function AppFooter() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h3" gutterBottom>
              Trip Pruitt - Front End Engineer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <nav>
              <List>
                <ListItem>
                  <ListItemButton>
                    <AppLink href="/">Home</AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <AppLink href="/#about">About</AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <AppLink href="/#work">Work</AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <AppLink href="/#contact">Contact</AppLink>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <AppLink href="/">View Résumé</AppLink>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack direction="row" spacing={1}>
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
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default AppFooter;
