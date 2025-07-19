import Empowering from '@/components/blocs/about/Empowering/Empowering'
import InnvocationComponent from '@/components/blocs/about/innvocation/Innvocation'
import LeadersComponent from '@/components/blocs/about/leaders/Leaders'
import MainBanner from '@/components/blocs/about/MainBanner/MainBanner'
import Platform from '@/components/blocs/about/platform/Platform'
import { Container } from '@mui/material'
import React from 'react'

const AboutPage = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <MainBanner />
      <InnvocationComponent />
      <Empowering/>
      <Platform />
      <LeadersComponent />
    </Container>
  )
}

export default AboutPage
