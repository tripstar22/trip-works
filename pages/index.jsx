// * react imports *
import { useEffect, useState } from 'react';

// * next.js imports *
import { useRouter } from 'next/router';

// * third party library imports *
import * as contentful from 'contentful';

// * custom component imports *
import About from '../components/about/About';
import AppLayout from '../components/app-layout/AppLayout';
import AppLoader from '../components/app-loader/AppLoader';
import Contact from '../components/global/contact/Contact';
import HeroHome from '../components/heroes/hero-home/HeroHome';
import Labs from '../components/labs/Labs';
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/repository-cta/RepositoryCta';
import Skills from '../components/skills/Skills';

export async function getStaticProps() {
  // * access cms content *
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // * about *
    const aboutContentResponse = await client.getEntry(
      '5qNHxrgorV0020tJFgu0up',
    );
    const aboutContent = aboutContentResponse.fields;

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

    // * home hero *
    const homeHeroContentResponse = await client.getEntry(
      '6O60cfV82lAZKjI1vyWoJa',
    );
    const homeHeroContent = homeHeroContentResponse.fields;

    // * location *
    const locationContentResponse = await client.getEntry(
      '3zwnDmVEdqsO04rOy2WQIM',
    );
    const locationContent = locationContentResponse.fields;

    // * navigation main *
    const navigationMainResponse = await client.getEntry(
      '15OSvONv0lmHEajKZ0oHFb',
    );
    const navigationMain = navigationMainResponse.fields;

    // * projects *
    const projectsResponse = await client.getEntries({
      content_type: 'projects',
    });
    const projectsItems = projectsResponse.items;

    // * repository cta *
    const repositoryCtaResponse = await client.getEntry(
      '01lx3PqjdVxjp7QLNPaugU',
    );
    const repositoryCta = repositoryCtaResponse.fields;

    // * skills heading *
    const skillsHeadingResponse = await client.getEntry(
      'SzzgN6NoZIsDBxcPLHNvO',
    );
    const skillsHeading = skillsHeadingResponse.fields;

    // * skills items *
    const skillsItemsResponse = await client.getEntries({
      content_type: 'skillsItems',
    });
    const skillsItems = skillsItemsResponse.items;

    // * work heading *
    const workHeadingResponse = await client.getEntry('4D8B7cYwhfl13gL74nIcqa');
    const workHeading = workHeadingResponse.fields;

    return {
      props: {
        aboutContent,
        contactContent,
        footerHeading,
        homeHeroContent,
        locationContent,
        navigationMain,
        projectsItems,
        repositoryCta,
        skillsHeading,
        skillsItems,
        workHeading,
      },
    };
  } catch (error) {
    console.log(`Error fetching Contentful data: ${error}`);

    return {
      props: {
        aboutContent: null,
        contactContent: null,
        footerHeading: null,
        homeHeroContent: null,
        locationContent: null,
        navigationMain: null,
        projectsItems: null,
        repositoryCta: null,
        skillsHeading: null,
        skillsItems: null,
        workHeading: null,
      },
    };
  }
}

function IndexPage(props) {
  // * cms content *
  const { pageProp } = props;
  const {
    aboutContent,
    contactContent,
    footerHeading,
    homeHeroContent,
    locationContent,
    navigationMain,
    projectsItems,
    repositoryCta,
    skillsHeading,
    skillsItems,
    workHeading,
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
    const contentfulDataLoaded = aboutContent
      && contactContent
      && footerHeading
      && homeHeroContent
      && locationContent
      && navigationMain
      && projectsItems
      && repositoryCta
      && skillsHeading
      && skillsItems
      && workHeading;

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
    aboutContent,
    contactContent,
    documentIsReady,
    footerHeading,
    homeHeroContent,
    isRendered,
    locationContent,
    navigationMain,
    projectsItems,
    repositoryCta,
    router.isReady,
    skillsHeading,
    skillsItems,
    workHeading,
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
      <HeroHome homeHeroContent={homeHeroContent} />
      <About aboutContent={aboutContent} locationContent={locationContent} />
      <Skills skillsHeading={skillsHeading} skillsItems={skillsItems} />
      <Projects projectsItems={projectsItems} workHeading={workHeading} />
      <Labs />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </AppLayout>
  );
}

export default IndexPage;
