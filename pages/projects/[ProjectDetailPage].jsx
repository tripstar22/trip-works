/* react imports */
import React from 'react';

/* third party library imports */
const contentful = require('contentful');

/* custom component imports */
import AppLayout from '../../components/app-layout/AppLayout';
import Contact from '../../components/global/contact/Contact';
import Gallery from '../../components/gallery/Gallery';
import ProjectDetail from '../../components/project-detail/ProjectDetail';
import RepositoryCta from '../../components/global/repository-cta/RepositoryCta';

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    // contact
    const contactContentResponse = await client.getEntry(
      '6QNHyhpaVHS7bgqmfxQg0s'
    );
    const contactContent = contactContentResponse.fields;

    // repository cta
    const repositoryCtaResponse = await client.getEntry(
      '01lx3PqjdVxjp7QLNPaugU'
    );
    const repositoryCta = repositoryCtaResponse.fields;

    return {
      props: {
        contactContent,
        repositoryCta,
      },
    };
  } catch (error) {
    console.log('Error fetching Contentful data: ' + error);

    return {
      props: {
        contactContent: null,
        repositoryCta: null,
      },
    };
  }
}

function ProjectDetailPage(props) {
  const { pageProp } = props;

  const {
    contactContent,
    repositoryCta,
  } = pageProp;

  if (
    !pageProp ||
    !pageProp.contactContent ||
    !pageProp.repositoryCta
  ) {
    return <AppLoader />;
  }

  return (
    <AppLayout>
      <ProjectDetail />
      <Gallery />
      <Contact contactContent={contactContent} />
      <RepositoryCta repositoryCta={repositoryCta} />
    </AppLayout>
  );
}

export default ProjectDetailPage;
