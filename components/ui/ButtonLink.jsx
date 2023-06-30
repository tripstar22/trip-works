/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* mui imports */
import Button from '@mui/material/Button';

function ButtonLink(props) {
  const { children } = props;
  return <Button 
            className={props.className} 
            href={props.href} 
            rel={props.rel} 
            target={props.target}
         >
              {children}
          </Button>;
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
