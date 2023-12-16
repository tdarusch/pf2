import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';
import FormikTextField from '../../../Components/FormikTextField/FormikTextField';
import { useFormik } from 'formik';

const initialValues = {
  title: '',
  dateRange: '',
  description: '',
  link: ''
};

const ProjectDialog = ({ open, project=initialValues, handleSubmit, handleCancel, handleDelete }) => {
  const [currentProject, setCurrentProject] = useState(project);

  const formik = useFormik({
    initialValues: currentProject,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  useEffect(() => {
    console.log(project);
    setCurrentProject(project);
  }, [project]);

  return(
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Box display='flex' justifyContent='center'>
          <Typography fontSize={25}>Project Editor</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display='flex' flexDirection='column' justifyContent='top' m={1} p={1}>
          <Box display='flex' justifyContent='center' m={2}>
            <FormikTextField
              name='title'
              label='Title'
              formik={formik}
            />
          </Box>
          <Box display='flex' justifyContent='center' m={2}>
            <FormikTextField
              name='dateRange'
              label='Date Range'
              formik={formik}
            />
          </Box>
          <Box display='flex' justifyContent='center' m={2}>
            <FormikTextField
              name='description'
              label='Description'
              formik={formik}
              multiline
              minRows={6}
            />
          </Box>
          <Box display='flex' justifyContent='center' m={2}>
            <FormikTextField
              name='link'
              label='Link'
              helperText='(Optional)'
              formik={formik}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='primary' onClick={formik.submitForm}>Submit</Button>
        <Button variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;