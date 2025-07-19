import * as yup from 'yup'
import { matchIsValidTel } from 'mui-tel-input'
export const contactFormValidations = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  note:yup.string(),
  phone: yup
    .string()
    .required('Phone number is required!')
    .test('mobile', 'Phone number is not valid', (str: string) => {
      const pn = matchIsValidTel(str)
      return pn
    }),
  email: yup
    .string()
    .required('Email is required!')
    .email()
    .required('Please enter valid email address!'),

})
