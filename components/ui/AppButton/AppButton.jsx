import React from 'react';

import Button from '@mui/material/Button';

import classes from './AppButton.module.scss';

function AppButton(props) {
  const { children } = props;
  return <Button className={classes.AppButton} variant="contained">{children}</Button>;
}

export default AppButton;
