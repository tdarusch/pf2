import React from "react";
import { Box, Typography, Divider } from "@mui/material";
// import headshot from "../../Images/headshot.png";
// import headshot1 from "../../Images/headshot1.png";
import "@fontsource/oswald";
import PageContainer from "../../Components/PageContainer/PageContainer";
// import CircularImage from "../../Components/CircularImage/CircularImage";

const StaticLanding = (props) => {
  return(
    <>
      <PageContainer transparent>
        <Box display='flex' justifyContent='center' ml={10} mt={5}>
          <Box display='flex' flexDirection='column' justifyContent='top'>
            <Box display='flex' justifyContent='left'>
              <Typography variant='h3' fontSize={50}>Hi, I'm Tom</Typography>
            </Box>
            <Box my={2} width={225}>
              <Divider />
            </Box>
            <Box display='flex' justifyContent='center'>
              <Typography variant='h2' fontSize={25} width={700}>
                I am a full stack web developer & software engineer currently working for Savannah River Nuclear Solutions and a senior computer science major
                at Augusta University. <br/><br/>
                &nbsp; &nbsp; &nbsp; This site is a portfolio of my past, ongoing, and future work, projects, and publications. I intend to utilize a Java Spring service to allow
                for blog posts, articles, and comments/persistence once the UI is closer to completion. <br/><br/>
                &nbsp; &nbsp; Feel free to reach out with any inquiries or proposals.
              </Typography>
            </Box>
          </Box>
        </Box>
      </PageContainer>
    </>
  )
};

export default StaticLanding;