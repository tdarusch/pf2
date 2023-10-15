import React from 'react';
import InlineContainer from '../../InlineContainer/InlineContainer';
import { Typography } from '@mui/material';

const HeaderText = (props) => {
  return(
    <InlineContainer
      justify={props?.justify || 'left'}
    >
      <Typography 
        variant={props?.variant || 'h3'}
        sx={{userSelect: 'none'}}
        {...props}
      >
        {props?.text || props.children}
      </Typography>
    </InlineContainer>
  );
};

export default HeaderText;