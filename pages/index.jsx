import * as React from 'react';

import About from '../components/about/About';
import Contact from '../components/global/Contact';
import HomeHero from '../components/heroes/HomeHero';
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/RepositoryCta';

function IndexPage() {
  return (
    <>
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <RepositoryCta />
    </>
  );
}

export default IndexPage;
