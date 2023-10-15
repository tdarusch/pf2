import React from 'react';
import { Box } from '@mui/material';

const CircularImage = (props) => {
  
  return(
    <Box
      component='img'
      borderRadius={45}
      sx={{userSelect: 'none'}}
      {...props}
    />
  );
};

export default CircularImage;