/* react imports */
import React from 'react';

/* mui imports */
import Button from '@mui/material/Button';

function ButtonAction (props) {
  const { children } = props;
  return (
    <Button className={props.className} variant="contained">
      {children}
    </Button>
  );
}

export default ButtonAction;
