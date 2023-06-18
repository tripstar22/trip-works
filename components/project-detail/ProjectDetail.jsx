/* react imports */
import React from 'react';

/* custom component imports */
import ProjectDetailHero from '../hero/ProjectDetailHero';
import ProjectDetailContent from './ProjectDetailContent';

function ProjectDetail() {
  return (
    <div>
      <ProjectDetailHero />
      <ProjectDetailContent />
    </div>
  );
}

export default ProjectDetail;
