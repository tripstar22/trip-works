/* react imports */
import React from 'react';

/* third party library imports */
import RichText from '@madebyconnor/rich-text-to-jsx';

/* mui imports */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/* custom component imports */
import ButtonLink from '../../ui/button-link/ButtonLink';
import RevealOnScroll from '../../ui/reveal-on-scroll/RevealOnScroll';

/* styles imports */
import classes from './_repositoryCta.module.scss';

function RepositoryCta({ repositoryCtaSectionContent }) {
  const { repositoryCtaHeading, repositoryCtaContent, repositoryCtaLink } =
    repositoryCtaSectionContent;

  return (
    <section
      className={`section section___paddingSmall ${classes.repositoryCta}`}
    >
      <RevealOnScroll end="top top" start="bottom bottom">
        <Container maxWidth="lg">
          <Grid justifyContent="center" container spacing={0}>
            <Grid item xs={12}>
              <Typography component="h5" gutterBottom variant="h5">
                {repositoryCtaHeading}
              </Typography>
              <div className={classes.repositoryCta_content}>
                <RichText richText={repositoryCtaContent} />
              </div>
              <ButtonLink href={repositoryCtaLink.href} target="_blank">
                {repositoryCtaLink.text}
              </ButtonLink>
            </Grid>
          </Grid>
        </Container>
      </RevealOnScroll>
    </section>
  );
}

export default RepositoryCta;
