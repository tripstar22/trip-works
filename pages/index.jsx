/* react imports */
import * as React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import About from '../components/about/About';
import AppLoader from '../components/app-loader/AppLoader';
import Contact from '../components/global/contact/Contact';
import HeroHome from '../components/hero/HeroHome';
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/repository-cta/RepositoryCta';
import Skills from '../components/skills/Skills';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntry('2phgos2kmnPiN8LVzcwtGh');
    const dataContent = response.fields;

    return {
      props: {
        dataContent,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        dataContent: null,
      },
    };
  }
}

function IndexPage(props) {
  const { pageProp } = props;
  const { dataContent } = pageProp;

  if (!dataContent) {
    return <AppLoader />;
  }

  return (
    <>
      <HeroHome dataContent={dataContent} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <RepositoryCta />
    </>
  );
}

export default IndexPage;
