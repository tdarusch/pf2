import React from 'react';
import { Box } from '@mui/material';

const VerticalContainer = (props) => {
  
  return(
    <Box
      height={props?.height || 'auto'}
      display='flex'
      flexDirection='column'
      justifyContent={props?.justify || 'center'}
      mr={props?.orientation && props?.orientation === 'left' ? 2 : 0}
      ml={props?.orientation && props?.orientation === 'right' ? 2 : 0}
      sx={{userSelect: 'none'}}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default VerticalContainer;