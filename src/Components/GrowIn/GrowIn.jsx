import React, { useState, useEffect } from 'react';
import { Grow } from '@mui/material';

const GrowIn = ({
  children,
  in: In = true,
  timeout = 1000,
  delay = 0,
  onEntered,
  animated
}) => {
  const [isIn, setIsIn] = useState(In && delay === 0)
   console.log(animated);
  useEffect(() => {
     if (delay > 0) {
        setTimeout(() => setIsIn(true), delay)
     }
  })

  if(!animated) {
     return (
        <Grow 
         in={isIn} 
         timeout={timeout} 
         onEntered={onEntered}
      >
           {children}
        </Grow>
     )
  } else {
   return(
      <>
         {children}
      </>
   )
  }
}

export default GrowIn;