import * as React from 'react';

import AboutMe from '../components/about/AboutMe';
import ContactMe from '../components/global/ContactMe';
import HomeHero from '../components/heroes/HomeHero';
import ProjectsFeatured from '../components/projects/ProjectsFeatured';
import RepositoryCta from '../components/global/RepositoryCta';

function IndexPage() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <ProjectsFeatured />
      <ContactMe />
      <RepositoryCta />
    </>
  );
}

export default IndexPage;
