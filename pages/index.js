import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Trip Pruitt
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Front End Engineer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in metus vulputate eu. Ut venenatis tellus in metus. Amet purus gravida quis blandit turpis. Vel turpis nunc eget lorem dolor sed viverra. A scelerisque purus semper eget duis. Facilisis leo vel fringilla est ullamcorper. Viverra nibh cras pulvinar mattis nunc. Mollis nunc sed id semper. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Aliquet eget sit amet tellus cras adipiscing enim eu. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Blandit aliquam etiam erat velit scelerisque in dictum. Aenean sed adipiscing diam donec adipiscing tristique risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
