/* react imports */
import * as React from 'react';

/* custom component imports */
import About from '../components/about/About';
import Contact from '../components/global/contact/Contact';
import HeroHome from '../components/hero/HeroHome';
import Projects from '../components/projects/Projects';
import RepositoryCta from '../components/global/repository-cta/RepositoryCta';
import Skills from '../components/skills/Skills';

function IndexPage() {
  return (
    <>
      <HeroHome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <RepositoryCta />
    </>
  );
}

export default IndexPage;
