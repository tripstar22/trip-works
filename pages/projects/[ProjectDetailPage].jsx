// * react imports *
import { useEffect, useState } from 'react';

// * next.js imports *
import { useRouter } from 'next/router';

// * third party library imports *
import * as contentful from 'contentful';

// * custom component imports *
import AppLayout from '../../components/app-layout/AppLayout';
import AppLoader from '../../components/app-loader/AppLoader';
import Contact from '../../components/global/contact/Contact';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../../components/global/repository-cta/RepositoryCta';

export async function getStaticPaths() {
  // * access cms content for project urls *
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // * projects *
  const projectsResponse = await client.getEntries({
    content_type: 'projects',
  });

  // * project paths *
  const paths = projectsResponse.items.map((item) => ({
    params: { ProjectDetailPage: item.fields.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  // * access cms content *
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // * contact *
    const contactContentResponse = await client.getEntry(
      '6QNHyhpaVHS7bgqmfxQg0s',
    );
    const contactContent = contactContentResponse.fields;

    // * footer heading *
    const footerHeadingResponse = await client.getEntry(
      '7IE5FyfjP2sp1Y5kpC3Q2n',
    );
    const footerHeading = footerHeadingResponse.fields;

    // * navigation main *
    const navigationMainResponse = await client.getEntry(
      '15OSvONv0lmHEajKZ0oHFb',
    );
    const navigationMain = navigationMainResponse.fields;

    // * project *
    const project = await client.getEntries({
      content_type: 'projects',
      'fields.slug': params.ProjectDetailPage,
    });
    // * if project dosen't exist then return not found
    if (!project.items.length) {
      return {
        notFound: true,
      };
    }

    // * repository cta *
    const repositoryCtaResponse = await client.getEntry(
      '01lx3PqjdVxjp7QLNPaugU',
    );
    const repositoryCta = repositoryCtaResponse.fields;

    return {
      props: {
        contactContent,
        footerHeading,
        navigationMain,
        project: project.items[0],
        repositoryCta,
      },
    };
  } catch (error) {
    console.log(`Error fetching Contentful data: ${error}`);

    return {
      props: {
        contactContent: null,
        footerHeading: null,
        navigationMain: null,
        project: null,
        repositoryCta: null,
      },
    };
  }
}

function ProjectDetailPage(props) {
  // * cms content *
  const { pageProp } = props;
  const {
    contactContent,
    footerHeading,
    navigationMain,
    project,
    repositoryCta,
  } = pageProp;

  // * state *
  const [documentIsReady, setDocumentIsReady] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [loading, setLoading] = useState(true);

  // * router *
  const router = useRouter();

  useEffect(() => {
    let allLoaded = false;

    // * check if all the Contentful data is available *
    const contentfulDataLoaded = contactContent
      && footerHeading
      && navigationMain
      && project
      && repositoryCta;

    // * handlers *
    const onDocReady = function handlerOnDocumentReady() {
      if (document.readyState === 'complete') {
        setDocumentIsReady(true);
      }
    };

    // * check if document is already loaded when component mounts *
    onDocReady();

    // * events *
    document.addEventListener('readystatechange', onDocReady);

    // * update state for isRendered once rendered *
    setIsRendered(true);

    /*
      check for:
        • cms content loaded,
        • document ready,
        • isRendered,
        • router ready
    */

    allLoaded = contentfulDataLoaded
      && documentIsReady
      && isRendered
      && router.isReady;

    if (allLoaded) {
      setLoading(false);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', onDocReady);
    };
  }, [
    contactContent,
    documentIsReady,
    footerHeading,
    isRendered,
    navigationMain,
    project,
    repositoryCta,
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
      <ProjectDetail project={project} />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </AppLayout>
  );
}

export default ProjectDetailPage;
