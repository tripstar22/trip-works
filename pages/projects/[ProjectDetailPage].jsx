import React from 'react';

import ContactMe from '../../components/global/ContactMe';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../components/global/RepositoryCta';

function ProjectDetailPage() {
  return (
    <div>
      <ProjectDetail />
      <ContactMe />
      <RepositoryCta />
    </div>
  );
}

export default ProjectDetailPage;
