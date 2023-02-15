import React from 'react';
import Box from '@mui/material/Box';
import ProTip from '../../src/ProTip';
import Copyright from '../../src/Copyright';

function AppFooter() {
  return (
    <footer>
      <div>This is the footer</div>
      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>
    </footer>
  );
}

export default AppFooter;
