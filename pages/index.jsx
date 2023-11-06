/* react imports */
import * as React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import About from '../components/about/About';
import AppLayout from '../components/app-layout/AppLayout';
import AppLoader from '../components/app-loader/AppLoader';
import Contact from '../components/global/contact/Contact';
import HeroHome from '../components/hero/HeroHome'
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/repository-cta/RepositoryCta';
import Skills from '../components/skills/Skills';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // about
    const aboutContentResponse = await client.getEntry(
      '5qNHxrgorV0020tJFgu0up'
    );
    const aboutContent = aboutContentResponse.fields;

    // contact
    const contactContentResponse = await client.getEntry(
      '6QNHyhpaVHS7bgqmfxQg0s'
    );
    const contactContent = contactContentResponse.fields;

    // home hero
    const homeHeroContentResponse = await client.getEntry(
      '6O60cfV82lAZKjI1vyWoJa'
    );
    const homeHeroContent = homeHeroContentResponse.fields;

    // location
    const locationContentResponse = await client.getEntry(
      '3zwnDmVEdqsO04rOy2WQIM'
    );
    const locationContent = locationContentResponse.fields;

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

    // skills heading
    const skillsHeadingResponse = await client.getEntry(
      'SzzgN6NoZIsDBxcPLHNvO'
    );
    const skillsHeading = skillsHeadingResponse.fields;

    // skills items
    const skillsItemsResponse = await client.getEntries({
      content_type: 'skillsItems',
    });
    const skillsItems = skillsItemsResponse.items;

    // work heading
    const workHeadingResponse = await client.getEntry(
      '4D8B7cYwhfl13gL74nIcqa'
    );
    const workHeading = workHeadingResponse.fields;

    return {
      props: {
        aboutContent,
        contactContent,
        homeHeroContent,
        locationContent,
        navigationMain,
        repositoryCta,
        skillsHeading,
        skillsItems,
        workHeading,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        aboutContent: null,
        contactContent: null,
        homeHeroContent: null,
        locationContent: null,
        navigationMain: null,
        repositoryCta: null,
        skillsHeading: null,
        skillsItems: null,
        workHeading: null,
      },
    };
  }
}

function IndexPage(props) {
  const { pageProp } = props;
  const {
    aboutContent,
    contactContent,
    homeHeroContent,
    locationContent,
    navigationMain,
    repositoryCta,
    skillsHeading,
    skillsItems,
    workHeading,
  } = pageProp;

  if (
    !pageProp ||
    !pageProp.aboutContent ||
    !pageProp.contactContent ||
    !pageProp.homeHeroContent ||
    !pageProp.locationContent ||
    !pageProp.navigationMain ||
    !pageProp.repositoryCta ||
    !pageProp.skillsHeading ||
    !pageProp.skillsItems ||
    !pageProp.workHeading
  ) {
    return <AppLoader />;
  }

  return (
    <AppLayout navigationMain={navigationMain}>
      <HeroHome homeHeroContent={homeHeroContent} />
      <About aboutContent={aboutContent} locationContent={locationContent} />
      <Skills skillsHeading={skillsHeading} skillsItems={skillsItems} />
      <Projects workHeading={workHeading} />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </AppLayout>
  );
}

export default IndexPage;
