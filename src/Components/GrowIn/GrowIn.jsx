import React, { useState, useEffect } from 'react';
import { Grow } from '@mui/material';

const GrowIn = ({
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
     <Grow in={isIn} timeout={timeout} onAnimationEnd={onExit}>
        {children}
     </Grow>
  )
}

export default GrowIn;