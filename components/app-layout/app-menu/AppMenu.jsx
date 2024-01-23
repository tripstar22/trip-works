/* react imports */
import React, { useEffect } from 'react';
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
import AppLink from '../../ui/app-link/AppLink';

/* styles imports */
import classes from './_appmenu.module.scss';

function AppMenu({ menuOpen, navigationMain, toggleMenuClose }) {
  useEffect(() => {
    const checkUrlHash = function handlerCheckUrlHash() {
      const hash = window.location.hash;
      const sectionId = hash.substring(hash.indexOf('#') + 1);
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView();
      }
    };

    checkUrlHash();
  }, []);

  return (
    <div className={classes.appmenu}>
      <Drawer anchor="left" open={menuOpen}>
        <Grid container>
          <Grid item xs={12} className={classes.appmenu_grid}>
            <IconButton onClick={toggleMenuClose} aria-label="close menu">
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <nav>
          <List>
            {navigationMain.items.items.map((item, index) => (
              <ListItem key={index} className={classes.appmenu_listItem}>
                <ListItemButton className={classes.appmenu_listItemButton}>
                  <AppLink
                    dataTarget="skills"
                    href={item.href}
                    onClick={toggleMenuClose}
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
      </Drawer>
    </div>
  );
}

AppMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  navigationMain: PropTypes.object.isRequired,
  toggleMenuClose: PropTypes.func.isRequired,
};

export default AppMenu;
