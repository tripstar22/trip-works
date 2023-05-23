import React from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';

function AppLink(props) {
  const { children } = props;
  return <Link className={props.className} href={props.href}>{children}</Link>;
}

AppLink.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppLink;
