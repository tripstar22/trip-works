/* react imports */
import React from 'react';

/* custom component imports */
import Contact from '../../components/global/contact/Contact';
import Gallery from '../../components/gallery/Gallery';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../../components/global/repository-cta/RepositoryCta';

function ProjectDetailPage() {
  return (
    <div>
      <ProjectDetail />
      <Gallery />
      <Contact />
      <RepositoryCta />
    </div>
  );
}

export default ProjectDetailPage;
