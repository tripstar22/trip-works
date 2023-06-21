/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui icon imports */
import Close from '@mui/icons-material/Close';

/* mui imports */
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

/* custom component imports */
import AppLink from '../ui/AppLink';

/* styles imports */
import classes from './_appmenu.module.scss';

function AppMenu({ handlerMenuClose, menuOpen }) {
  return (
    <div className={classes.appmenu}>
      <Drawer anchor="left" open={menuOpen}>
        <Grid container>
          <Grid 
            className={classes.appmenu_grid}
            item 
            xs={12}
          >
            <IconButton 
              aria-label="close menu" 
              onClick={handlerMenuClose}
            >
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <nav>
          <List>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/">Home</AppLink>
              </ListItemButton>
            </ListItem>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/#about" onClick={handlerMenuClose}>About</AppLink>
              </ListItemButton>
            </ListItem>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/#skills" onClick={handlerMenuClose}>Skills</AppLink>
              </ListItemButton>
            </ListItem>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/#work" onClick={handlerMenuClose}>Work</AppLink>
              </ListItemButton>
            </ListItem>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/#contact" onClick={handlerMenuClose}>Contact</AppLink>
              </ListItemButton>
            </ListItem>
            <ListItem className={classes.appmenu_listItem}>
              <ListItemButton className={classes.appmenu_listItemButton}>
                <AppLink href="/" onClick={handlerMenuClose}>View Résumé</AppLink>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </div>
  );
}

AppMenu.propTypes = {
  handlerMenuClose: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default AppMenu;
