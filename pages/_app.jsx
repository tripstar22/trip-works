import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import '../src/styles/scss/_fonts.scss';
import '../src/styles/scss/_utilities.scss';
import themeLight from '../src/styles/js/themes/themeLight';
import themeDark from '../src/styles/js/themes/themeDark';
import createEmotionCache from '../src/styles/js/createEmotionCache';

import AppLayout from '../components/layout/AppLayout';

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
      <ThemeProvider theme={themeLight}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppLayout>
          <Component pageProp={pageProps} />
        </AppLayout>
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
