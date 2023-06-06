/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* next.js imports */
import Link from 'next/link';

function AppLink(props) {
  const { children } = props;
  return <Link className={props.className} href={props.href} onClick={props.onClick}>{children}</Link>;
}

AppLink.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppLink;
