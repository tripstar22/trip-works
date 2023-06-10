import * as React from 'react';

import About from '../components/about/About';
import Contact from '../components/global/Contact';
import HomeHero from '../components/heroes/HomeHero/HomeHero';
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/RepositoryCta/RepositoryCta';
import Skills from '../components/skills/Skills';

function IndexPage() {
  return (
    <>
      <HomeHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <RepositoryCta />
    </>
  );
}

export default IndexPage;
