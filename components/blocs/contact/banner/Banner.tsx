/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import FormMobileInput from '@/components/formFields/PhoneInput'
import FormTextInput from '@/components/formFields/TextInputField'
import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormValidations } from '@/utilities/validations'
import { gql, useMutation } from '@apollo/client'

const MUTATION_QUERY = gql`
  mutation SaveContactForm($input: ContactFormInput) {
    saveContactForm(input: $input)
  }
`

const StyledBanner = styled(Box)(({ theme }) => ({
  minHeight: 500,
  height: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  paddingTop: 150,
  paddingBottom: 50,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  [theme.breakpoints.only('xs')]: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 30,
  },
  '& .MuiTypography-body1': {
    width: '90%',
  },
  '& .MuiTypography-body2': {
    color: theme.palette.grey[500],
  },
  '& .contact-form': {
    height: '100%',
    backgroundColor: theme.palette.common.white,
    borderRadius: 10,
  },
}))

const Banner = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactFormValidations),
  })
  const [SaveContactForm, { loading }] = useMutation(MUTATION_QUERY, {
    onCompleted: () => {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        note:''
      })
      alert('Thank you for making contact')
    },
    onError: () => {
      alert(
        'Sorry, we encountered an error trying to send your message. Please try submitting again.',
      )
    },
  })

  const handleSubmitFormData = async (data: any) => {
    SaveContactForm({
      variables: {
        input: {
          description: data?.description,
          email: data?.email,
          firstName: data?.firstName,
          lastName: data?.lastName,
          phone: data?.phone,
        },
      },
    })
  }

  return (
    <StyledBanner style={{ backgroundImage: `url(/images/bg.jpg)` }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="body1">
              Email, call or fill the form to learn how OneInfo can help kick start your creation
              journey
            </Typography>
            <Box mt={2}>
              <Typography fontWeight={700} variant="subtitle1">
                Email
              </Typography>
              <Typography>support@oneinfo.io</Typography>
            </Box>
            <Box mt={2}>
              <Typography fontWeight={700} variant="subtitle1">
                Mobile
              </Typography>
              <Typography>+91 9848011150</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box p={3} component="div" className="contact-form">
              <Grid container>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="h5">Get in touch</Typography>
                  <Typography variant="body2">You can reach us anytime</Typography>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <FormTextInput
                      control={control}
                      name="firstName"
                      id="frist-name"
                      label=""
                      defaultValue=""
                      textFieldProps={{
                        fullWidth: true,
                        placeholder: 'Enter Frist Name',
                        size: 'small',
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <FormTextInput
                      control={control}
                      name="lastName"
                      id="last-name"
                      label=""
                      defaultValue=""
                      textFieldProps={{
                        fullWidth: true,
                        placeholder: 'Enter Last Name',
                        size: 'small',
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormTextInput
                      control={control}
                      name="email"
                      id="email-address"
                      label=""
                      defaultValue=""
                      textFieldProps={{
                        fullWidth: true,
                        placeholder: 'Enter Email Address',
                        size: 'small',
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormMobileInput control={control} name="phone" id="phone" defaultValue="" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormTextInput
                      control={control}
                      name="note"
                      id="note"
                      label=""
                      defaultValue=""
                      textFieldProps={{
                        fullWidth: true,
                        placeholder: 'Enter a Description (Optional)',
                        size: 'small',
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      disableElevation
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={loading}
                      onClick={handleSubmit(handleSubmitFormData)}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledBanner>
  )
}

export default Banner
