import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from './AppHeader';
import ContactMe from '../misc/ContactMe';
import AppFooter from './AppFooter';

function AppLayout(props) {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <ContactMe />
      <AppFooter />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppLayout;
