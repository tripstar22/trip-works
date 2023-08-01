/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* custom component imports */
import AppFooter from './app-footer/AppFooter';
import AppHeader from './app-header/AppHeader';
import BackToTop from '../utilities/back-to-top/BackToTop';

function AppLayout (props) {
  const { children } = props;
  return (
    <>
      <span className="srOnly">
        <a href="#pageTop" className="pageTop">Skip to Content</a>
      </span>
      <AppHeader />
      <main id="pageTop">
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
