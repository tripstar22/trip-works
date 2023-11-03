/* react imports */
import React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import PageNotFound from '../components/page-not-found/PageNotFound';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // page not found
    const pageNotFoundContentResponse = await client.getEntry(
      '6lCWLbBeREz7TrFPfAwkXp'
    );
    const pageNotFoundContent = pageNotFoundContentResponse.fields;

    return {
      props: {
        pageNotFoundContent,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        pageNotFoundContent: null,
      },
    };
  }
}

function FourZeroFour(props) {
  const { pageProp } = props;
  const { pageNotFoundContent } = pageProp;

  if (!pageProp || !pageProp.pageNotFoundContent) {
    return <AppLoader />;
  }

  return <PageNotFound pageNotFoundContent={pageNotFoundContent} />;
}

export default FourZeroFour;
