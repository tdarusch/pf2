import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Grid, DialogActions, Button } from '@mui/material';
import { useFormik } from 'formik';
import FormikTextField from '../../../../Components/FormikTextField/FormikTextField';

const newProject = {
  title: '',
  subtitle: '',
  description: '',
  startYear: null,
  endYear: null,
  link: ''
};

const ProjectEditor = ({open, project, onSave, onCancel}) => {
  const formik = useFormik({
    initialValues: project || newProject,
    enableReinitialize: true
  });

  const handleSave = () => {
    onSave(formik.values);
  };

  const handleCancel = () => {
    formik.setValues(project ? project : newProject);
    onCancel();
  };

  return(
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Typography textAlign='center'>Project Editor</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <FormikTextField 
              name='title'
              Label='Title'
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField 
              name='subtitle'
              label='Subtitle'
              formik={formik}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormikTextField 
              name='startYear'
              label='Start Year'
              helperText='(MM/YYYY)'
              formik={formik}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormikTextField 
              name='endYear'
              label='End Year'
              helperText='(Optional)'
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField 
              name='description'
              label='Description'
              formik={formik}
              multiline
              rows={8}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='primary' onClick={handleSave}>Submit</Button>
        <Button variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectEditor;