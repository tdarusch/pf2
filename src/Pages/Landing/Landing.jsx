import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import headshot from "../../Images/headshot.png";
import headshot1 from "../../Images/headshot1.png";
import "@fontsource/oswald";
import PageContainer from "../../Components/PageContainer/PageContainer";
import CircularImage from "../../Components/CircularImage/CircularImage";
import GrowIn from "../../Components/GrowIn/GrowIn";

const Landing = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  if(props.animated === false) {
    return(
      <>
        <PageContainer transparent>
            {/* 
              figure out how to stop animation from playing again during current session onEnter={props.setAnimated(true)}
              if theres a different non-state solution then remove animated state hook from app.js
            */}
            <GrowIn in timeout={{ enter: 500 }} delay={1200} >
              <Box display='flex' justifyContent='center' ml={10} mt={5}>
                <Box display='flex' flexDirection='column' justifyContent='top'>
                  <Box display='flex' justifyContent='left'>
                    <Typography fontFamily='Oswald' variant='h2' fontSize={100}>Hi, I'm Tom.</Typography>
                  </Box>
                  <Box display='flex' justifyContent='center'>
                    <Typography fontFamily='Oswald' variant='h2' fontSize={30} width={700}>
                      I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and a senior computer science major
                      at Augusta University. <br/><br/>
                      &nbsp; &nbsp; &nbsp; This site is a portfolio of my past, ongoing, and future work, projects, and publications. I intend to utilize a Java Spring service to allow
                      for blog posts, articles, and comments/persistence once the UI is closer to completion. <br/><br/>
                      &nbsp; &nbsp; Feel free to reach out with any inquiries or proposals.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <CircularImage showBorder src={headshot} alt='Senior Photo'/>
                  </Box>
                  <Box position='relative' left={150} bottom={100}>
                    <CircularImage showBorder src={headshot1} alt='2022 CURS SSP Symposium' />
                  </Box>
                </Box>
              </Box>
            </GrowIn>
        </PageContainer>
      </>
    );
  } else {
    return(
      <>
        <PageContainer transparent>
            <Box display='flex' justifyContent='center' ml={10} mt={5}>
              <Box display='flex' flexDirection='column' justifyContent='top'>
                <Box display='flex' justifyContent='left'>
                  <Typography fontFamily='Oswald' variant='h2' fontSize={100}>Hi, I'm Tom.</Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                  <Typography fontFamily='Oswald' variant='h2' fontSize={30} width={700}>
                    I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and a senior computer science major
                    at Augusta University. <br/><br/>
                    &nbsp; &nbsp; &nbsp; This site is a portfolio of my past, ongoing, and future work, projects, and publications. I intend to utilize a Java Spring service to allow
                    for blog posts, articles, and comments/persistence once the UI is closer to completion. <br/><br/>
                    &nbsp; &nbsp; Feel free to reach out with any inquiries or proposals.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <CircularImage showBorder src={headshot} alt='Senior Photo'/>
                </Box>
                <Box position='relative' left={150} bottom={100}>
                  <CircularImage showBorder src={headshot1} alt='2022 CURS SSP Symposium' />
                </Box>
              </Box>
            </Box>
        </PageContainer>
      </>
    );
  }
};

export default Landing;