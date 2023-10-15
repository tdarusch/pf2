import React from "react";
import Box from '@mui/material/Box';


const PageContainer = (props, justify) => {
  return(
    <Box 
      display='flex' 
      justifyContent='center' 
      minWidth='2000px'
      height='auto'
      margin='20px 0 0 0'
      sx={{userSelect: 'none'}}
    >
      <Box 
        width='2000px'
        minWidth='2000px'
        display='flex'
        justifyContent={props?.justify || 'center'}
        flexDirection='column'
        height='auto'
        borderRadius='15px'
        sx={{backgroundColor: '#1a1a1a'}}
        padding={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default PageContainer;