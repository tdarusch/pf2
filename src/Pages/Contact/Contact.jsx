import React from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import { Box, Button } from '@mui/material';
import FormikTextField from "../../Components/FormikTextField/FormikTextField";
import { yupSchema } from "./validationSchema";
import { useFormik } from "formik";

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const Contact = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yupSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return(
    <PageContainer transparent>
      <Box display='flex' flexDirection='column' justifyContent='top'>
        <Box p={3}>
          <FormikTextField 
            name='name'
            label='Name'
            formik={formik}
          />
        </Box>
        <Box p={3}>
          <FormikTextField 
            name='email'
            label='Email'
            formik={formik}
          />
        </Box>
        <Box p={3}>
          <FormikTextField 
            name='message'
            label='Message'
            formik={formik}
            multiline
            minRows={6}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button
            variant='outlined'
            color='primary'
            onClick={formik.submitForm}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Contact;