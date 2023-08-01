/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* library imports */
import Slider from 'react-slick';

/* mui icon imports */
import Close from '@mui/icons-material/Close';

/* mui imports */
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

/* custom component imports */
import Carousel from '../carousel/Carousel';

/* styles imports */
import classes from './_appmodal.module.scss';

function AppModal({ open, toggleModalClose }) {
  return (
    <Modal
      onClose={toggleModalClose}
      open={open}
      aria-label="project modal carousel"
    >
      <div className={classes.appmodal}>
        <div className={classes.appmodal_container}>
          <Carousel />
        </div>
        <IconButton
          className={classes.appmodal_close}
          onClick={toggleModalClose}
          aria-label="close modal"
        >
          <Close className={classes.appmodal_closeIcon} />
        </IconButton>
      </div>
    </Modal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModalClose: PropTypes.func,
};

export default AppModal;
