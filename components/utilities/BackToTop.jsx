/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui icon imports */
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

/* mui imports */
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

/* custom component imports */
import AppLink from '../ui/AppLink';

/* custom module imports */
import aniScroll from '../../modules/aniScroll';

/* styles imports */
import classes from './_backtotop.module.scss';

function BackToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    // <Fade in={trigger}>
    //   <Box ref="presentation">
        <AppLink 
          href="#page-top" 
          className={classes.backtotop} 
          dataTarget="page-top" 
          onClick={aniScroll}
        >
          <Fab aria-label="scroll back to top" size="small">
            <KeyboardArrowUp className={classes.backtotop_icon} tab-index="-1" />
          </Fab>
        </AppLink>
    //   </Box>
    // </Fade>
  );
}

export default BackToTop;
