import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '@fontsource/oswald'

const TypingText = (props) => {
  return (
    <TypeAnimation 
      sequence={props.text}
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.3em', display: 'inline-block', fontFamily: 'oswald'}}
      speed={50}
    />
  )
};

export default TypingText;