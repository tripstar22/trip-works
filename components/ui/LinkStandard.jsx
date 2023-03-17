import React from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';

function LinkStandard(props) {
  const { children } = props;
  return <Link href={props.href}>{children}</Link>;
}

LinkStandard.propTypes = {
  children: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkStandard;
