import React from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import FormikTextField from "../../Components/FormikTextField/FormikTextField";

const initialValues = {
  username: '',
  password: ''
};

const Login = (props) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: v => {
      //todo
      console.log(v);
    }
  });

  return(
    <PageContainer transparent>
      <Box display='flex' flexDirection='column' justifyContent='top'>
        <Box p={3}>
          <FormikTextField 
            name='username'
            label='Username'
            formik={formik}
          />
        </Box>
        <Box p={3}>
          <FormikTextField 
            name='password'
            label='Password'
            formik={formik}
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button
            variant='outlined'
            color='primary'
            onClick={formik.submitForm}
          >
            Login
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Login;