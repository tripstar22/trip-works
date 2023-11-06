/* react imports */
import React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import AppLayout from '../components/app-layout/AppLayout';
import AppLoader from '../components/app-loader/AppLoader';
import PageNotFound from '../components/page-not-found/PageNotFound';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // navigation main
    const navigationMainResponse = await client.getEntry(
      '15OSvONv0lmHEajKZ0oHFb'
    );
    const navigationMain = navigationMainResponse.fields;

    // page not found
    const pageNotFoundContentResponse = await client.getEntry(
      '6lCWLbBeREz7TrFPfAwkXp'
    );
    const pageNotFoundContent = pageNotFoundContentResponse.fields;

    return {
      props: {
        navigationMain,
        pageNotFoundContent,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        navigationMain: null,
        pageNotFoundContent: null,
      },
    };
  }
}

function FourZeroFour(props) {
  const { pageProp } = props;
  const { navigationMain, pageNotFoundContent } = pageProp;

  if (!pageProp || !pageProp.navigationMain || !pageProp.pageNotFoundContent) {
    return <AppLoader />;
  }

  return (
    <AppLayout navigationMain={navigationMain}>
      <PageNotFound pageNotFoundContent={pageNotFoundContent} />
    </AppLayout>
  );
}

export default FourZeroFour;
