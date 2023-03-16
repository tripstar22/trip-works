import React from 'react';
import PropTypes from 'prop-types';

import Close from '@mui/icons-material/Close';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import AppLink from '../ui/AppLink/AppLink';

function AppMenu({ menuOpen, handlerMenuClose }) {
  return (
    <div>
      <Drawer anchor="left" open={menuOpen}>
        <IconButton aria-label="close menu" onClick={handlerMenuClose}>
          <Close />
        </IconButton>
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
      </Drawer>
    </div>
  );
}

AppMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  handlerMenuClose: PropTypes.func.isRequired,
};

export default AppMenu;
