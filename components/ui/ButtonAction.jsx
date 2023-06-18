/* react imports */
import React from 'react';

/* mui imports */
import Button from '@mui/material/Button';

function ButtonAction(props) {
  const { children } = props;
  return <Button variant="contained">{children}</Button>;
}

export default ButtonAction;
