import React from "react";
import { Box, Typography } from "@mui/material";
import headshot from "../../Images/headshot.png";
import headshot1 from "../../Images/headshot1.png";
import "@fontsource/oswald";
import PageContainer from "../../Components/PageContainer/PageContainer";
import CircularImage from "../../Components/CircularImage/CircularImage";
import GrowIn from "../../Components/GrowIn/GrowIn";

const Landing = (props) => {
  const animated = !!localStorage.getItem("animated");
  return(
    <>
      <PageContainer transparent>
        {!animated && 
          <GrowIn in timeout={{ enter: 500 }} delay={1200} onExit={() => localStorage.setItem("animated", true)}>
            <Box display='flex' justifyContent='center' ml={10} mt={5}>
              <Box display='flex' flexDirection='column' justifyContent='top'>
                <Box display='flex' justifyContent='left'>
                  <Typography fontFamily='Oswald' variant='h2' fontSize={100}>Hi, I'm Tom.</Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                  <Typography fontFamily='Oswald' variant='h2' fontSize={30} width={700}>
                    I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and finishing my computer science degree
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
        }
        {animated && 
          <Box display='flex' justifyContent='center' ml={10} mt={5}>
            <Box display='flex' flexDirection='column' justifyContent='top'>
              <Box display='flex' justifyContent='left'>
                <Typography fontFamily='Oswald' variant='h2' fontSize={100}>Hi, I'm Tom.</Typography>
              </Box>
              <Box display='flex' justifyContent='center'>
                <Typography fontFamily='Oswald' variant='h2' fontSize={30} width={700}>
                  I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and finishing my computer science degree
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
        }
      </PageContainer>
    </>
  );
};

export default Landing;