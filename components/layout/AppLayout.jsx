/* react imports */
import React from 'react';
import PropTypes from 'prop-types';

/* custom component imports */
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import BackToTop from '../utilities/BackToTop';

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
