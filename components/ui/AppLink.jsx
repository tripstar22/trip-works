/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* next.js imports */
import Link from 'next/link';

function AppLink(props) {
  const { children } = props;
  return <Link 
          href={props.href}
          className={props.className} 
          data-target={props.dataTarget}
          onClick={props.onClick}
        >
          {children}
        </Link>;
}

AppLink.propTypes = {
  children: PropTypes.any,
};

export default AppLink;
