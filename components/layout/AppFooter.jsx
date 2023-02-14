import React from 'react';
import Box from '@mui/material/Box';
import ProTip from '../../src/ProTip';
import Copyright from '../../src/Copyright';

function AppFooter() {
  return (
    <div>
      <div>This is the footer</div>
      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>
    </div>
  );
}

export default AppFooter;
