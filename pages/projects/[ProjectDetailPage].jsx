/* react imports */
import React from 'react';

/* custom component imports */
import Contact from '../../components/global/Contact';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../../components/global/RepositoryCta';

function ProjectDetailPage() {
  return (
    <div>
      <ProjectDetail />
      <Contact />
      <RepositoryCta />
    </div>
  );
}

export default ProjectDetailPage;
