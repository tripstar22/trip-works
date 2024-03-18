// * react imports *
import * as React from 'react';

// * next.js imports *
import Head from 'next/head';
// import Script from 'next/script';

// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// * emotion imports *
import { CacheProvider } from '@emotion/react';

// * src style imports *
// fonts imported first
import '../src/styles/scss/fonts/fonts.scss';
// theme imports
import createEmotionCache from '../src/styles/js/createEmotionCache';
import themeDefault from '../src/styles/js/themes/themeDefault';
// base styles imported second
import '../src/styles/scss/global/base.scss';
// other global styles imported alphabetically
import '../src/styles/scss/global/appCarousel.scss';
import '../src/styles/scss/global/section.scss';
import '../src/styles/scss/global/utilities.scss';

// * src js imports *
import '../src/js/console-message/consoleMessage';

// * Client-side cache, shared for the whole session of the user in the browser. *
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Trip Pruitt - Front End Engineer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={themeDefault}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component pageProp={pageProps} />
      </ThemeProvider>
      {/* <Script src="../src/js/consoleMessage.js" type="text/javascript" defer /> */}
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

MyApp.defaultProps = {
  emotionCache: undefined,
};

export default MyApp;
