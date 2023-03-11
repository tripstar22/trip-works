import * as React from 'react';

import HomeHero from '../components/heroes/HomeHero';
import AboutMe from '../components/about/AboutMe';
import ProjectsFeatured from '../components/projects/ProjectsFeatured';
import ContactMe from '../components/global/ContactMe';

function IndexPage() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <ProjectsFeatured />
      <ContactMe />
    </>
  );
}

export default IndexPage;
