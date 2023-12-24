import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Grid, DialogActions, Button } from '@mui/material';
import { useFormik } from 'formik';
import FormikTextField from '../../../../Components/FormikTextField/FormikTextField';

const newAccolade = {
  title: '',
  institution: '',
  description: '',
  year: ''
};

const AccoladesEditor = ({open, accolade, onSave, onCancel}) => {
  const formik = useFormik({
    initialValues: accolade || newAccolade,
    enableReinitialize: true
  });

  const handleSave = () => {
    onSave(formik.values);
  };

  const handleCancel = () => {
    formik.setValues(accolade ? accolade : newAccolade);
    onCancel();
  };

  return(
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Typography textAlign='center'>Accolade Editor</Typography>
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
              name='institution'
              label='Institution'
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField 
              name='year'
              label='Year(s)'
              helperText='(String)'
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

export default AccoladesEditor;