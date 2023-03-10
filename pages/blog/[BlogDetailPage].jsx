import React from 'react';

import BlogDetailHero from '../../components/heroes/BlogDetailHero';
import BlogInfo from '../../components/blog-detail/BlogInfo';
import SocialSharing from '../../components/utilities/SocialSharing';
import BlogDetailContent from '../../components/blog-detail/BlogDetailContent';
import ContactMe from '../../components/global/ContactMe';

function BlogDetailPage() {
  return (
    <div>
      <BlogDetailHero />
      <BlogInfo />
      <SocialSharing />
      <BlogDetailContent />
      <ContactMe />
    </div>
  );
}

export default BlogDetailPage;
