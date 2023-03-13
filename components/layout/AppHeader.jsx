import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Brightness3 from '@mui/icons-material/Brightness3';
import WbSunny from '@mui/icons-material/WbSunny';

import AppBar from '@mui/material/AppBar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppMenu from './AppMenu';

function HideHeaderOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideHeaderOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerMenuOpen = () => {
    setMenuOpen(true);
  };

  const handlerMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <HideHeaderOnScroll>
      <AppBar>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <IconButton aria-label="open menu" onClick={handlerMenuOpen}>
              <Menu />
            </IconButton>
            <AppMenu menuOpen={menuOpen} handlerMenuClose={handlerMenuClose} />
          </Grid>
          <Grid item xs={6}>
            <Link href="/" color="textPrimary">
              <div>Logo goes here</div>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <span><WbSunny fontSize="small" /></span>
            <FormControlLabel
              control={<Switch size="small" />}
              label="toggle theme"
              labelPlacement="top"
            />
            <span><Brightness3 fontSize="small" /></span>
          </Grid>
        </Grid>
      </AppBar>
    </HideHeaderOnScroll>
  );
}

export default AppHeader;
