import * as React from 'react';
import Container from '@mui/material/Container';

import HomeHero from '../components/heroes/HomeHero';
import AboutMe from '../components/misc/AboutMe';
import FeaturedProjects from '../components/misc/FeaturedProjects';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <HomeHero />
      <AboutMe />
      <FeaturedProjects />
    </Container>
  );
}
