import React from 'react';
import { Box, Divider } from '@mui/material';

const PageSpacer = (props) => {
  
  return(
    <Box
      width='100%'
      height={props.height}
      my={props?.my || 5}
      sx={{userSelect: 'none'}}
      {...props}
    >
      {props.showDivider &&
        <Divider/>
      }
    </Box>
  );
};

export default PageSpacer;