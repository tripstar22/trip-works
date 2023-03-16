import React from 'react';

import Link from '@mui/material/Link';

import classes from './AppLink.module.scss';

function AppLink(props) {
  const { children, reference } = props;
  return <Link href={reference} className={classes.AppLink}>{children}</Link>;
}

export default AppLink;
