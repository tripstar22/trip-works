/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* next.js imports */
import Link from 'next/link';

function AppLink(props) {
  const { children } = props;
  return (
    <Link
      className={props.className}
      data-target={props.dataTarget}
      href={props.href}
      onClick={props.onClick}
      rel={props.rel}
      target={props.target}
    >
      {children}
    </Link>
  );
}

AppLink.propTypes = {
  children: PropTypes.any,
};

export default AppLink;
