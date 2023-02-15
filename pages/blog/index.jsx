import React from 'react';

import BlogIndexHero from '../../components/heroes/BlogIndexHero';
import BlogFiltering from '../../components/blog/BlogFiltering';
import BlogMain from '../../components/blog/BlogMain';
import ContactMe from '../../components/global/ContactMe';

function BlogIndexPage() {
  return (
    <div>
      <BlogIndexHero />
      <BlogFiltering />
      <BlogMain />
      <ContactMe />
    </div>
  );
}

export default BlogIndexPage;
