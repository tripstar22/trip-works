// * react imports *
import { useState } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// * custom component imports *
import AppLink from '../../ui/app-link/AppLink';
import AppMenu from '../app-menu/AppMenu';

// * svg imports *
import Logo from '../../../svg/logos/logo.svg';

// * styles imports *
import classes from './appheader.module.scss';

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

function AppHeader({ navigationMain }) {
  // * state *
  const [menuOpen, setMenuOpen] = useState(false);

  // * handlers *
  const toggleMenuOpen = function handlerToggleMenuOpen() {
    setMenuOpen(true);
  };
  const toggleMenuClose = function handlerToggleMenuClose() {
    setMenuOpen(false);
  };

  return (
    <HideHeaderOnScroll>
      <AppBar>
        <div className={classes.appheader}>
          <Grid container spacing={0} className={classes.appheader_grid}>
            <Grid item xs={3}>
              <IconButton onClick={toggleMenuOpen} aria-label="open menu">
                <Menu />
              </IconButton>
              <AppMenu
                menuOpen={menuOpen}
                navigationMain={navigationMain}
                toggleMenuClose={toggleMenuClose}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.appheader_logo}>
                <AppLink href="/" className={classes.appheader_link} ariaLabel="home">
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
