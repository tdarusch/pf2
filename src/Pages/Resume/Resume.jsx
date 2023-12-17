import React from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import Skills from "./Elements/Skills";
import testResume from "../../Assets/Resume";
import ResumeHeader from "./Elements/ResumeHeader";
import { Divider, Box } from "@mui/material";
import Accolades from "./Elements/Accolades";

const resume = testResume;

const CustomDiv = ({width}) => {
  return(
    <Box mb={3} mt={0.5} display='flex' justifyContent='center'>
      <Box width={width}>
        <Divider variant='middle' />
      </Box>
    </Box>
  )
}

const Resume = () => {
  return(
    <PageContainer transparent>
      <ResumeHeader text='Accolades & Achievements' />
      <CustomDiv width={350} />
      <Accolades accolades={resume.accolades} />
      <ResumeHeader text='Relevant Skills' />
      <CustomDiv width={200} />
      <Skills skills={resume.skills}/>
    </PageContainer>
  );
};


export default Resume;