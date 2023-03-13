import React from 'react';
import PropTypes from 'prop-types';

import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handlerScrollTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#page-top'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handlerScrollTop}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function BackToTop() {
  return (
    <ScrollTop>
      <Fab size="small" aria-label="scroll back to top">
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>
  );
}

export default BackToTop;
