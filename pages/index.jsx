/* react imports */
import * as React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import About from '../components/about/About';
import AppLoader from '../components/app-loader/AppLoader';
import Contact from '../components/global/contact/Contact';
import HeroHome from '../components/hero/HeroHome';
import Location from '../components/location/Location';
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

    return {
      props: {
        aboutContent,
        contactContent,
        homeHeroContent,
        locationContent,
        repositoryCta,
        skillsHeading,
        skillsItems,
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
        repositoryCta: null,
        skillsHeading: null,
        skillsItems: null,
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
    repositoryCta,
    skillsHeading,
    skillsItems,
  } = pageProp;

  if (
    !pageProp ||
    !pageProp.aboutContent ||
    !pageProp.contactContent ||
    !pageProp.homeHeroContent ||
    !pageProp.locationContent ||
    !pageProp.repositoryCta ||
    !pageProp.skillsHeading ||
    !pageProp.skillsItems
  ) {
    return <AppLoader />;
  }

  return (
    <>
      <HeroHome homeHeroContent={homeHeroContent} />
      <About aboutContent={aboutContent} />
      <Location locationContent={locationContent} />
      <Skills skillsHeading={skillsHeading} skillsItems={skillsItems} />
      <Projects />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </>
  );
}

export default IndexPage;
