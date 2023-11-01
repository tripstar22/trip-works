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
import { Main } from 'next/document';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const contentPrimaryResponse = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_PRIMARY
    );
    const contentPrimary = contentPrimaryResponse.fields;

    return {
      props: {
        contentPrimary,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        contentPrimary: null,
      },
    };
  }
}

function IndexPage(props) {
  const { pageProp } = props;
  const { contentPrimary } = pageProp;

  const { about, contact, location, main, repositoryCta } = contentPrimary.main;

  if (!pageProp || !pageProp.contentPrimary) {
    return <AppLoader />;
  }

  return (
    <>
      <HeroHome homeHeroContent={main} />
      <About aboutContent={about} />
      <Location locationContent={location} />
      <Skills />
      <Projects />
      <Contact contactContent={contact} />
      <RepositoryCta repositoryCtaContent={repositoryCta} />
    </>
  );
}

export default IndexPage;
