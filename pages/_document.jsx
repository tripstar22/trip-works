// * react imports *
import * as React from 'react';

// * next.js imports *
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

// * emotion imports *
import createEmotionServer from '@emotion/server/create-instance';

// * src imports *
import { FontSansSerifDefault } from '../src/styles/js/fonts/fonts';
import themeDefault from '../src/styles/js/themes/themeDefault';
import createEmotionCache from '../src/styles/js/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={FontSansSerifDefault.className}>
        <Head>
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={themeDefault.palette.primary.main}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => function EnhanceApp(props) {
      /* eslint react/jsx-props-no-spreading: "off" */
      return <App emotionCache={cache} {...props} />;
    },
  });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
