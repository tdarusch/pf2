import React, { useState, useEffect } from 'react';
import { Fade } from '@mui/material';

const FadeIn = ({
  children,
  in: In = true,
  timeout = 1000,
  delay = 0,
  onExit
}) => {
  const [isIn, setIsIn] = useState(In && delay === 0)

  useEffect(() => {
     if (delay > 0) {
        setTimeout(() => setIsIn(true), delay)
     }
  })

  return (
     <Fade in={isIn} timeout={timeout} onAnimationEnd={onExit}>
        {children}
     </Fade>
  )
}

export default FadeIn;