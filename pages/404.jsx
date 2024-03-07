// * react imports *
import { useEffect, useState } from 'react';

// * next.js imports *
import { useRouter } from 'next/router';

// * third party library imports *
import * as contentful from 'contentful';

// * custom component imports *
import AppLayout from '../components/app-layout/AppLayout';
import AppLoader from '../components/app-loader/AppLoader';
import PageNotFound from '../components/page-not-found/PageNotFound';

export async function getStaticProps() {
  // * access cms content *
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // * footer heading *
    const footerHeadingResponse = await client.getEntry(
      '7IE5FyfjP2sp1Y5kpC3Q2n'
    );
    const footerHeading = footerHeadingResponse.fields;

    // * navigation main *
    const navigationMainResponse = await client.getEntry(
      '15OSvONv0lmHEajKZ0oHFb'
    );
    const navigationMain = navigationMainResponse.fields;

    // * page not found *
    const pageNotFoundContentResponse = await client.getEntry(
      '6lCWLbBeREz7TrFPfAwkXp'
    );
    const pageNotFoundContent = pageNotFoundContentResponse.fields;

    return {
      props: {
        footerHeading,
        navigationMain,
        pageNotFoundContent,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        footerHeading: null,
        navigationMain: null,
        pageNotFoundContent: null,
      },
    };
  }
}

function FourZeroFour(props) {
  // * cms content *
  const { pageProp } = props;
  const { footerHeading, navigationMain, pageNotFoundContent } = pageProp;

  // * state *
  const [documentIsReady, setDocumentIsReady] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [loading, setLoading] = useState(true);

  // * router *
  const router = useRouter();

  useEffect(() => {
    let allLoaded = false;

    // * check if all the Contentful data is available *
    const contentfulDataLoaded =
      footerHeading &&
      navigationMain &&
      pageNotFoundContent;

    // * handlers *
    const onDocReady = function handlerOnDocumentReady() {
      if (document.readyState === 'complete') {
        setDocumentIsReady(true);
      }
    };

    // * check if document is already loaded when component mounts *
    onDocReady();

    // * events *
    document.addEventListener('DOMContentLoaded', onDocReady);

    // * update state for isRendered once rendered *
    setIsRendered(true);

    /* 
      check for:
        • cms content loaded, 
        • document ready,
        • isRendered,
        • router ready
    */

    allLoaded = 
      contentfulDataLoaded &&
      documentIsReady &&
      isRendered &&
      router.isReady;

    if (allLoaded) {
      setLoading(false);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDocReady);
    };
  }, [
    documentIsReady,
    footerHeading,
    isRendered,
    navigationMain,
    pageNotFoundContent,
    router.isReady,
  ]);

  useEffect(() => {
    // * handlers *
    const routeChangeStart = function handerRouteChangeStart() {
      setLoading(true);
    };
    const routeChangeComplete = function handerRouteChangeComplete() {
      setLoading(false);
    };
    
    // * events *
    /* 
      • use events.on instead of addEventListener as it is the recommended way to listen for route change events in Next.js *
      • will automatically cleanup event listeners when component is unmounted
    */
    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
  }, [router.events]);

  if (loading) {
    return <AppLoader />;
  }

  return (
    <AppLayout footerHeading={footerHeading} navigationMain={navigationMain}>
      <PageNotFound pageNotFoundContent={pageNotFoundContent} />
    </AppLayout>
  );
}

export default FourZeroFour;
