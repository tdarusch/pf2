import React from 'react';
import { Box } from '@mui/material';

const CircularImage = (props) => {
  
  return(
    <Box
      component='img'
      borderRadius={45}
      sx={{
        userSelect: 'none', 
        border: props?.showBorder === true ? 1 : 0,
        borderColor: 'divider',
        opacity: 0.5
      }}
      maxWidth={props?.size || 'auto'}
      maxHeight={props?.size || 'auto'}
      {...props}
    />
  );
};

export default CircularImage;