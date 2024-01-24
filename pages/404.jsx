/* third party library imports */
import * as contentful from 'contentful';

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
    // footer heading
    const footerHeadingResponse = await client.getEntry(
      '7IE5FyfjP2sp1Y5kpC3Q2n'
    );
    const footerHeading = footerHeadingResponse.fields;

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
  const { pageProp } = props;
  const { footerHeading, navigationMain, pageNotFoundContent } = pageProp;

  if (
    !pageProp ||
    !pageProp.footerHeading ||
    !pageProp.navigationMain ||
    !pageProp.pageNotFoundContent
  ) {
    return <AppLoader />;
  }

  return (
    <AppLayout footerHeading={footerHeading} navigationMain={navigationMain}>
      <PageNotFound pageNotFoundContent={pageNotFoundContent} />
    </AppLayout>
  );
}

export default FourZeroFour;
