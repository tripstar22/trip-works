import React from 'react';
import PropTypes from 'prop-types';

import Close from '@mui/icons-material/Close';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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
      </Drawer>
    </div>
  );
}

AppMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  handlerMenuClose: PropTypes.func.isRequired,
};

export default AppMenu;
