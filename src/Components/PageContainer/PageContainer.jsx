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
        borderRadius={props?.transparent === true ? 0 : '15px'}
        sx={{
          backgroundColor: props?.transparent === true ? '#121212' : '#1a1a1a', 
          border: props?.showBorder === true ? 1 : 0, 
          borderColor: 'divider'}}
        padding={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default PageContainer;