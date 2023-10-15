import React from 'react';
import { Box } from '@mui/material';

const InlineContainer = (props) => {
  return(
    <Box
      height={props?.height || 'auto'}
      display='flex'
      justifyContent={props?.justify || 'center'}
      width='100%'
      my={props?.verticalMargin || .5}
      sx={{userSelect: 'none'}}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default InlineContainer;