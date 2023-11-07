/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui imports */
import Button from '@mui/material/Button';

function ButtonAction(props) {
  const { children } = props;
  return <Button variant="contained">{children}</Button>;
}

ButtonAction.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonAction;
