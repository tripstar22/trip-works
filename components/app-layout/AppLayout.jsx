/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* custom component imports */
import AppFooter from './app-footer/AppFooter';
import AppHeader from './app-header/AppHeader';
import BackToTop from '../ui/back-to-top/BackToTop';

function AppLayout(props) {
  const { children, footerHeading, navigationMain } = props;

  return (
    <>
      <span className="srOnly">
        <a href="#pageTop" className="pageTop">
          Skip to Content
        </a>
      </span>
      <AppHeader navigationMain={navigationMain} />
      <main id="pageTop">
        {children}
        <BackToTop />
      </main>
      <AppFooter
        footerHeading={footerHeading}
        navigationMain={navigationMain}
      />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppLayout;
