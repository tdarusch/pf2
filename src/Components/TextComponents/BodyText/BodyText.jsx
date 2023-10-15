import React from 'react';
import InlineContainer from '../../InlineContainer/InlineContainer';
import { Typography } from '@mui/material';

const BodyText = (props) => {
  return(
    <InlineContainer
      justify={props?.justify || 'left'}
    >
      <Typography 
        variant={props?.variant || 'body1'}
        sx={{userSelect: 'none'}}
        textAlign={props?.justify || 'left'}
        {...props}
      >
        {props?.text || props.children}
      </Typography>
    </InlineContainer>
  );
};

export default BodyText;