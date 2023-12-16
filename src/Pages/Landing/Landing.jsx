import React from "react";
import { Box, Typography, Divider } from "@mui/material";
// import headshot from "../../Images/headshot.png";
// import headshot1 from "../../Images/headshot1.png";
import "@fontsource/oswald";
import PageContainer from "../../Components/PageContainer/PageContainer";
// import CircularImage from "../../Components/CircularImage/CircularImage";
import FadeIn from "../../Components/FadeIn/FadeIn";
import GrowIn from "../../Components/GrowIn/GrowIn";

const Landing = (props) => {
  return(
    <>
      <PageContainer transparent>
        <Box display='flex' justifyContent='center' ml={10} mt={5}>
          <Box display='flex' flexDirection='column' justifyContent='top'>
            <FadeIn in timeout={{ enter: 500 }} delay={1100}>
              <Box display='flex' justifyContent='left'>
                <Typography variant='h3' fontSize={50}>Hi, I'm Tom</Typography>
              </Box>
            </FadeIn>
            <GrowIn timeout={{ enter: 500 }} delay={1300}>
              <Box my={2} width={225}>
                <Divider />
              </Box>
            </GrowIn>
            <FadeIn in timeout={{ enter: 500 }} delay={1800}>
              <Box display='flex' justifyContent='center'>
                <Typography variant='h2' fontSize={25} width={700}>
                  I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and a senior computer science major
                  at Augusta University. <br/><br/>
                  &nbsp; &nbsp; &nbsp; This site is a portfolio of my past, ongoing, and future work, projects, and publications. I intend to utilize a Java Spring service to allow
                  for blog posts, articles, and comments/persistence once the UI is closer to completion. <br/><br/>
                  &nbsp; &nbsp; Feel free to reach out with any inquiries or proposals.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
          <Box>
            {/* <FadeIn in timeout={{ enter: 500 }} delay={2000}>
              <Box position='relative' right={75} bottom={50}>
                <CircularImage size={200} showBorder src={headshot1} alt='2022 CURS SSP Symposium' />
              </Box>
            </FadeIn> */}
          </Box>
        </Box>
      </PageContainer>
    </>
  )
};

export default Landing;