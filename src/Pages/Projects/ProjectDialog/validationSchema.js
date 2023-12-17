import * as Yup from 'yup';

export const yupSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  dateRange: Yup.string().required("Required"),
  description: Yup.string().required("Required")
});