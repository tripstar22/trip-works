/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* custom component imports */
import AppFooter from './AppFooter/AppFooter';
import AppHeader from './AppHeader/AppHeader';
import BackToTop from '../utilities/BackToTop';

function AppLayout(props) {
  const { children } = props;
  return (
    <>
      <span className="sr-only">
        <a href="#page-top">Skip to Content</a>
      </span>
      <AppHeader />
      <main id="page-top">
        {children}
        <BackToTop />
      </main>
      <AppFooter />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppLayout;
