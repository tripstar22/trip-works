/* react imports */
import { useEffect, useState } from 'react';

/* next.js imports */
import { useRouter } from 'next/router';

/* third party library imports */
import * as contentful from 'contentful';

/* custom component imports */
import AppLayout from '../../components/app-layout/AppLayout';
import AppLoader from '../../components/app-loader/AppLoader';
import Contact from '../../components/global/contact/Contact';
import Gallery from '../../components/gallery/Gallery';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../../components/global/repository-cta/RepositoryCta';

export async function getStaticPaths() {
  return {
    paths: [
      '/projects/aptos',
      '/projects/contec-healthcare',
      '/projects/count-covid',
      '/projects/georgia-tech-scheller-college-of-business',
      '/projects/removery',
      '/projects/rescue-pledge',
      '/projects/smallwood',
      '/projects/south-downtown'
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // contact
    const contactContentResponse = await client.getEntry(
      '6QNHyhpaVHS7bgqmfxQg0s'
    );
    const contactContent = contactContentResponse.fields;

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

    // repository cta
    const repositoryCtaResponse = await client.getEntry(
      '01lx3PqjdVxjp7QLNPaugU'
    );
    const repositoryCta = repositoryCtaResponse.fields;

    return {
      props: {
        contactContent,
        footerHeading,
        navigationMain,
        repositoryCta,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        contactContent: null,
        footerHeading: null,
        navigationMain: null,
        repositoryCta: null,
      },
    };
  }
}

function ProjectDetailPage(props) {
  const { pageProp } = props;

  const {
    contactContent,
    footerHeading,
    navigationMain,
    repositoryCta,
  } = pageProp;

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // check if all the Contentful data is available
    const contentfulDataLoaded =
      contactContent &&
      footerHeading &&
      navigationMain &&
      repositoryCta;

    const allLoaded = router.isReady && contentfulDataLoaded;

    setLoading(!allLoaded);
  }, [
    contactContent,
    footerHeading,
    navigationMain,
    repositoryCta,
    router.isReady,
  ]);

  if (loading) {
    return <AppLoader />;
  }

  return (
    <AppLayout footerHeading={footerHeading} navigationMain={navigationMain}>
      <script type="text/javascript" src="https://form.jotform.com/jsform/240076360593052"></script>
      <ProjectDetail />
      <Gallery />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </AppLayout>
  );
}

export default ProjectDetailPage;
