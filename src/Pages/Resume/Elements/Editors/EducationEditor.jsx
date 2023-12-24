import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Grid, DialogActions, Button } from '@mui/material';
import { useFormik } from 'formik';
import FormikTextField from '../../../../Components/FormikTextField/FormikTextField';

const newEducation = {
  school: '',
  degree: '',
  startYear: null,
  endYear: null
};

const EducationEditor = ({open, education, onSave, onCancel}) => {
  const formik = useFormik({
    initialValues: education || newEducation,
    enableReinitialize: true
  });

  const handleSave = () => {
    onSave(formik.values);
  };

  const handleCancel = () => {
    formik.setValues(education ? education : newEducation);
    onCancel();
  };

  return(
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Typography textAlign='center'>Education Editor</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <FormikTextField 
              name='school'
              Label='School'
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField 
              name='degree'
              label='Degree'
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='primary' onClick={handleSave}>Submit</Button>
        <Button variant='outlined' color='secondary' onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationEditor;