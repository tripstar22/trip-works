/* react imports */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* mui imports */
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

/* custom component imports */
import AppLink from '../ui/AppLink';
import AppMenu from './AppMenu';

/* svg imports */
import Logo from '../../src/svg/logos/logo.svg';

/* styles imports */
import classes from './_header.module.scss';

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

  const toggleMenuOpen = function handlerToggleMenuOpen() {
    setMenuOpen(true);
  };

  const toggleMenuClose = function handlerToggleMenuClose() {
    setMenuOpen(false);
  };

  return (
    <HideHeaderOnScroll>
      <AppBar>
        <div className={classes.header}>
          <Grid container spacing={0} className={classes.header_grid}>
            <Grid item xs={3}>
              <IconButton onClick={toggleMenuOpen} aria-label="open menu">
                <Menu />
              </IconButton>
              <AppMenu menuOpen={menuOpen} toggleMenuClose={toggleMenuClose} />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.header_logo}>
                <AppLink href="/" className={classes.header_link}>
                  <Logo />
                </AppLink>
              </div>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </HideHeaderOnScroll>
  );
}

export default AppHeader;
