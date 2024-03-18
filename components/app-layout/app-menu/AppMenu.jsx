// * react imports *
import { useEffect, useState } from 'react';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui icon imports *
import Close from '@mui/icons-material/Close';

// * mui imports *
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

// * custom component imports *
import AppLink from '../../ui/app-link/AppLink';

// * styles imports *
import classes from './appmenu.module.scss';

function AppMenu({ menuOpen, navigationMain, toggleMenuClose }) {
  // * state *
  const [contactIframeLoaded, setContactIframeLoaded] = useState(false);
  const [documentIsReady, setDocumentIsReady] = useState(false);

  useEffect(() => {
    let allReady;
    let contactIframe;
    let hasContactSection = false; // * Needed in order to properly calculate aniFade if contact iframe is in the view *

    if (document.querySelector('#contactForm iframe')) {
      hasContactSection = true;
      contactIframe = document.querySelector('#contactForm iframe');
    }

    // * handlers *
    const onDocReady = function handlerOnDocumentReady() {
      setDocumentIsReady(true);
    };
    /*
      • work around to navigate to element IDs in navigation since Next.js Link component navigates to top of page even if ID specified in href
    */
    const checkUrlHash = function handlerCheckUrlHash() {
      const { hash } = window.location;
      const sectionId = hash.substring(hash.indexOf('#') + 1);
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView(true);
      }
    };

    // * events *
    document.addEventListener('DOMContentLoaded', onDocReady());
    if (hasContactSection) {
      contactIframe.addEventListener('load', () => {
        setContactIframeLoaded(true);
      });
    }

    if (hasContactSection) {
      // * document ready and contact iframe loaded *
      allReady = documentIsReady && contactIframeLoaded;
    } else {
      // * document ready *
      allReady = documentIsReady;
    }

    if (allReady) {
      checkUrlHash();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDocReady);
      if (hasContactSection) {
        contactIframe.removeEventListener('load', () => {
          setContactIframeLoaded(true);
        });
      }
    };
  }, [contactIframeLoaded, documentIsReady]);

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
            {navigationMain.items.items.map((item) => (
              <ListItem key={item.id} className={classes.appmenu_listItem}>
                <ListItemButton className={classes.appmenu_listItemButton}>
                  <AppLink
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
