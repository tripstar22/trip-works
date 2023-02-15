import React from 'react';

import ProjectDetail from '../../components/project-detail/ProjectDetail';
import ContactMe from '../../components/global/ContactMe';
import BlogsFeatured from '../../components/global/BlogsFeatured';

function ProjectDetailPage() {
  return (
    <div>
      <ProjectDetail />
      <ContactMe />
      <BlogsFeatured />
    </div>
  );
}

export default ProjectDetailPage;
