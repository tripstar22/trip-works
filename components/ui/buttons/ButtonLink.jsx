import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

function ButtonLink(props) {
  const { children } = props;
  return <Button href={props.href} target="_blank">{children}</Button>;
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
