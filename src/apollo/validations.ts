import * as yup from 'yup'
export const contactFormValidations = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup
    .string()
    .required('Email is required!')
    .email()
    .required('Please enter valid email address!'),
})