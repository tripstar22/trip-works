/* react imports */
import * as React from 'react';
import PropTypes from 'prop-types';

/* next.js imports */
import Head from 'next/head';

/* mui imports */
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

/* emotion imports */
import { CacheProvider } from '@emotion/react';

/* src imports */
import createEmotionCache from '../public/js/createEmotionCache';
import '../src/styles/scss/_fonts.scss';
import '../src/styles/scss/global/_base.scss';
import '../src/styles/scss/global/_appCarousel.scss';
import '../src/styles/scss/global/_section.scss';
import '../src/styles/scss/global/_utilities.scss';
import themeDefault from '../public/js/themes/themeDefault';

// Client-side cache, shared for the whole session of the user in the browser.
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
