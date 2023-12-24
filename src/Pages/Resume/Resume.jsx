import React from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import Skills from "./Elements/Skills";
import testResume from "../../Assets/Resume";
import ResumeHeader from "./Elements/ResumeHeader";
import { Divider, Box, Typography } from "@mui/material";
import Accolades from "./Elements/Accolades";
import Projects from "./Elements/Projects";
import Education from "./Elements/Education";
import Experiences from "./Elements/Experiences";

const resume = testResume;

const CustomDiv = ({width}) => {
  return(
    <Box mb={1.5} mt={0.5} display='flex' justifyContent='center'>
      <Box width={width}>
        <Divider variant='middle' />
      </Box>
    </Box>
  )
}

const Resume = () => {
  return(
    <PageContainer transparent>
      <Box display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='top' flexDirection='column'>
          <Typography fontSize={35} textAlign='center'>Tommy Daniel Aleksi Rusch</Typography>
          <Typography fontSize={25} textAlign='center'>trusch@augusta.edu</Typography>
          <Typography fontSize={20} textAlign='center'>Augusta, GA</Typography>
        </Box>
      </Box>
      <ResumeHeader text='Experience' />
      <CustomDiv width={170} />
      <Experiences experiences={resume.experiences} />
      <ResumeHeader text='Education' />
      <CustomDiv width={160} />
      <Education education={resume.education} />
      <ResumeHeader text='Projects' />
      <CustomDiv width={150} />
      <Projects projects={resume.projects} />
      <ResumeHeader text='Accolades & Achievements' />
      <CustomDiv width={350} />
      <Accolades accolades={resume.accolades} />
      <ResumeHeader text='Relevant Skills' />
      <CustomDiv width={225} />
      <Skills skills={resume.skills}/>
    </PageContainer>
  );
};


export default Resume;