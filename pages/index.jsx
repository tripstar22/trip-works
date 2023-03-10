import * as React from 'react';

import Container from '@mui/material/Container';

import HomeHero from '../components/heroes/HomeHero';
import AboutMe from '../components/about/AboutMe';
import ProjectsFeatured from '../components/projects/ProjectsFeatured';
import ContactMe from '../components/global/ContactMe';
import BlogsFeatured from '../components/global/BlogsFeatured';

function IndexPage() {
  return (
    <>
      <Container maxWidth="lg">
        <HomeHero />
        <AboutMe />
        <ProjectsFeatured />
      </Container>
      <ContactMe />
      <BlogsFeatured />
    </>
  );
}

export default IndexPage;
