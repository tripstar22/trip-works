/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui imports */
import Modal from '@mui/material/Modal';

function AppModal({ open, toggleModalClose }) {
  console.log(toggleModalClose);
  return (
    <Modal
      onClose={toggleModalClose}
      open={open}
      aria-label="project modal carousel"
    >
      <div>
        AppModal works!
        <button onClick={toggleModalClose}>Close</button>
      </div>
    </Modal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModalClose: PropTypes.func.isRequired,
};

export default AppModal;
