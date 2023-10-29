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
    const homeHeroResponse = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_HOME_HERO_ID
    );
    const homeHeroContent = homeHeroResponse.fields;

    const aboutSectionResponse = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_ABOUT_ID
    );
    const aboutSectionContent = aboutSectionResponse.fields;

    const locationResponse = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_LOCATION_ID
    );
    const locationSectionContent = locationResponse.fields;

    const repositoryCtaResponse = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_REPOSITORY_CTA_ID
    );
    const repositoryCtaSectionContent = repositoryCtaResponse.fields;

    return {
      props: {
        aboutSectionContent,
        homeHeroContent,
        locationSectionContent,
        repositoryCtaSectionContent,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        aboutSectionContent: null,
        homeHeroContent: null,
        locationSectionContent: null,
        repositoryCtaSectionContent: null,
      },
    };
  }
}

function IndexPage(props) {
  const { pageProp } = props;
  const {
    aboutSectionContent,
    homeHeroContent,
    locationSectionContent,
    repositoryCtaSectionContent,
  } = pageProp;

  if (!pageProp) {
    return <AppLoader />;
  }

  return (
    <>
      <HeroHome homeHeroContent={homeHeroContent} />
      <About aboutSectionContent={aboutSectionContent} />
      <Location locationSectionContent={locationSectionContent} />
      <Skills />
      <Projects />
      <Contact />
      <RepositoryCta
        repositoryCtaSectionContent={repositoryCtaSectionContent}
      />
    </>
  );
}

export default IndexPage;
