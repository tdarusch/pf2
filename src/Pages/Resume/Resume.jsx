import React, { useState } from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import Skills from "./Elements/Entries/Skills";
import testResume from "../../Assets/Resume";
import { Divider, Box, Typography, IconButton } from "@mui/material";
import Accolades from "./Elements/Entries/Accolades";
import Projects from "./Elements/Entries/Projects";
import Education from "./Elements/Entries/Education";
import Experiences from "./Elements/Entries/Experiences";
import { useFormik } from "formik";
import EditList from "./Elements/Editors/EditList";
import EditIcon from '@mui/icons-material/Edit';

const resume = testResume;

const CustomDiv = ({width}) => {
  return(
    <Box mb={1.5} mt={0.5} display='flex' justifyContent='center'>
      <Box width={width}>
        <Divider variant='middle' />
      </Box>
    </Box>
  )
};

const ResumeHeader = ({text}) => {
  return(
    <Box display='flex' justifyContent='center' mt={3}>
      <Typography fontSize={28}>{text}</Typography>
      <Box>
        <Divider />
      </Box>
    </Box>
  );
};

const Resume = () => {
  const [editPath, setEditPath] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const formik = useFormik({
    initialValues: resume,
    enableReinitialize: true
  });

  const { values } = formik;

  const handleEdit = (path) => {
    setEditPath(path);
    setEditorOpen(true);
  };

  const handleCancel = () => {
    setEditorOpen(false);
    //fetch values stored in service
  };

  const handleSubmit = () => {
    setEditorOpen(false);
    //post formik values to service
  };

  return(
    <PageContainer transparent>
      <Box display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='top' flexDirection='column'>
          <Typography fontSize={35} textAlign='center'>Tommy Daniel Aleksi Rusch</Typography>
          <Typography fontSize={25} textAlign='center'>trusch@augusta.edu</Typography>
          <Typography fontSize={20} textAlign='center'>Augusta, GA</Typography>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <ResumeHeader text='Experience' />
        <Box display='flex' flexDirection='column-reverse' justifyContent='bottom'>
          <IconButton onClick={() => handleEdit('experiences')} sx={{height: 40}}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomDiv width={200} />
      <Experiences experiences={values.experiences} />
      <Box display='flex' justifyContent='center'>
        <ResumeHeader text='Education' />
        <Box display='flex' flexDirection='column-reverse' justifyContent='bottom'>
          <IconButton onClick={() => handleEdit('education')} sx={{height: 40}}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomDiv width={190} />
      <Education education={values.education} />
      <Box display='flex' justifyContent='center'>
        <ResumeHeader text='Projects' />
        <Box display='flex' flexDirection='column-reverse' justifyContent='bottom'>
          <IconButton onClick={() => handleEdit('projects')} sx={{height: 40}}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomDiv width={180} />
      <Projects projects={values.projects} />
      <Box display='flex' justifyContent='center'>
        <ResumeHeader text='Accolades & Achievements' />
        <Box display='flex' flexDirection='column-reverse' justifyContent='bottom'>
          <IconButton onClick={() => handleEdit('accolades')} sx={{height: 40}}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomDiv width={380} />
      <Accolades accolades={values.accolades} />
      <Box display='flex' justifyContent='center'>
        <ResumeHeader text='Relevant Skills' />
        <Box display='flex' flexDirection='column-reverse' justifyContent='bottom'>
          <IconButton onClick={() => handleEdit('skills')} sx={{height: 40}}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomDiv width={255} />
      <Skills skills={values.skills}/>
      <EditList 
        open={editorOpen} 
        path={editPath} 
        formik={formik} 
        onSave={handleSubmit} 
        onCancel={handleCancel}
      />
    </PageContainer>
  );
};


export default Resume;