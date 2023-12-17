import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const ResumeHeader = ({text}) => {
  
  return(
    <Box display='flex' justifyContent='center' mt={3}>
      <Typography fontSize={28}>{text}</Typography>
      <Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default ResumeHeader;