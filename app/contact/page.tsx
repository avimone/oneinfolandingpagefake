'use client'

import Banner from '@/components/blocs/contact/banner/Banner'
import Location from '@/components/blocs/contact/location/Location'
import { client } from '@/utilities/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { Container } from '@mui/material'
import React from 'react'

const ContactPage = () => {
  return (
    <ApolloProvider client={client}>
      <Container maxWidth="xl" disableGutters>
        <Banner />
        <Location />
      </Container>
    </ApolloProvider>
  )
}

export default ContactPage
