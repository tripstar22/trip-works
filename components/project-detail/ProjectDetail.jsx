/* react imports */
import React from 'react';

/* custom component imports */
import Gallery from '../gallery/Gallery';
import ProjectDetailHero from '../hero/ProjectDetailHero';
import ProjectDetailContent from './ProjectDetailContent';

function ProjectDetail () {
  return (
    <div>
      <ProjectDetailHero />
      <ProjectDetailContent />
      <Gallery />
    </div>
  );
}

export default ProjectDetail;
