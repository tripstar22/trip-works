import React from 'react';

import ArrowUpward from '@mui/icons-material/ArrowUpward';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function AppFooter() {
  return (
    <footer>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" gutterBottom>
            Trip Pruitt - Front End Engineer
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <nav>
            <List>
              <ListItem>
                <ListItemButton>
                  <Link to="/">Home</Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to="/">About</Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to="/">Work</Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to="/">Contact</Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to="/">View Résumé</Link>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={1}>
            <a href="http://www.linkedin.com/in/trip-pruitt-430b2b58" aria-label="View LinkedIn Profile" target="_blank" rel="noreferrer">
              <IconButton aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://github.com/tripstar22/" aria-label="View GitHub Profile" target="_blank" rel="noreferrer">
              <IconButton aria-label="GitHub">
                <GitHub />
              </IconButton>
            </a>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<ArrowUpward />}>Back to Top</Button>
        </Grid>
      </Grid>
    </footer>
  );
}

export default AppFooter;
