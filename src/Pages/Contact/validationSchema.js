import * as Yup from 'yup';

export const yupSchema = Yup.object().shape({
  name: Yup.string().required("A name/alias is required"),
  email: Yup.string().email().required("Contact email is required"),
  message: Yup.string().required("A message body is required")
});