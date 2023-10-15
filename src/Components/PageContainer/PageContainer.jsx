import React from "react";
import Box from '@mui/material/Box';


const PageContainer = (props) => {
  return(
    <Box 
      display='flex' 
      justifyContent='center' 
      minWidth='2000px'
      height='auto'
      margin='20px 0 0 0'
    >
      <Box 
        width='2000px'
        minWidth='2000px'
        display='flex'
        justifyContent='center'
        height='auto'
        borderRadius='15px'
        sx={{backgroundColor: '#1a1a1a'}}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default PageContainer;