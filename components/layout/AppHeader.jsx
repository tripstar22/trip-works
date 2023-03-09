import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';

import AppMenu from './AppMenu';

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerMenuOpen = () => {
    setMenuOpen(true);
  };

  const handlerMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      This is the header
      <IconButton aria-label="open menu" onClick={handlerMenuOpen}>
        <Menu />
      </IconButton>
      <AppMenu menuOpen={menuOpen} handlerMenuClose={handlerMenuClose} />
    </header>
  );
}

export default AppHeader;
