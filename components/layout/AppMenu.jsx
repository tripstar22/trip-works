import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Close from '@mui/icons-material/Close';

function AppMenu({ menuOpen, handlerMenuClose }) {
  return (
    <div>
      <Drawer anchor="left" open={menuOpen}>
        <IconButton aria-label="close menu" onClick={handlerMenuClose}>
          <Close />
        </IconButton>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Work</Link>
        <Link to="/">Contact</Link>
        <Link to="/">View Résumé</Link>
      </Drawer>
    </div>
  );
}

AppMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  handlerMenuClose: PropTypes.bool.isRequired,
};

export default AppMenu;
