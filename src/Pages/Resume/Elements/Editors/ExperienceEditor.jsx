import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Grid, DialogActions, Button } from '@mui/material';
import { useFormik } from 'formik';
import FormikTextField from '../../../../Components/FormikTextField/FormikTextField';

const newExperience = {
  title: '',
  company: '',
  startDate: '',
  endDate: '',
  description: ''
};

const ExperienceEditor = ({open, experience, onSave, onCancel}) => {
  const formik = useFormik({
    initialValues: experience || newExperience,
    enableReinitialize: true
  });

  const handleSave = () => {
    onSave(formik.values);
  };

  const handleCancel = () => {
    formik.setValues(experience ? experience : newExperience);
    onCancel();
  };

  return(
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Typography textAlign='center'>Experience Editor</Typography>
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
              name='company'
              label='Company'
              formik={formik}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormikTextField 
              name='startDate'
              label='Start Date'
              helperText='(MM/YYYY)'
              formik={formik}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormikTextField 
              name='endDate'
              label='End Date'
              helperText='(Optional, MM/YYYY)'
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

export default ExperienceEditor;