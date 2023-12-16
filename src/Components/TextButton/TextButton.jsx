import React from 'react';
import { Button, Typography } from '@mui/material';

const TextButton = (props) => {
  
  return(
    <Button 
      disableTouchRipple 
      sx={{
        color: '#fff',
        py: props.padding?.y || 0,
        px: props.padding?.x || 0,
        borderRadius: 0,
        borderBottom: 2,
        borderColor: 'transparent',
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'transparent',
          borderColor: '#FFF'
        }
      }}
      onClick={props.onClick}
      {...props.ButtonProps}
    >
      <Typography 
        sx={{userSelect: 'none'}} 
        fontSize={props.fontSize || 20}
        {...props.TextProps}
      >
        {props.text || ''}
      </Typography>  
    </Button>
  );
};

export default TextButton;