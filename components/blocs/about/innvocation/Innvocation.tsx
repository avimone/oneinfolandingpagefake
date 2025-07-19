'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'

const StyledLeadersSection = styled(Box)(({ theme }) => ({
  paddingTop: 75,
  [theme.breakpoints.only('xs')]:{
    paddingTop: 50,
  },
  '& .main-section': {
    backgroundImage: `linear-gradient(144deg, #6D98E9 0%, #D499D9 46%, #E9CFAB 100%)`,
    borderRadius: 20,
    padding: 15,
    [theme.breakpoints.only('xs')]:{
      borderRadius: 10,
    },
    '& .section-content': {
      backgroundColor: theme.palette.common.white,
      padding: 20,
      borderRadius: 10,
      minHeight: 110,
      '& .MuiTypography-body2': {
        color: theme.palette.text.secondary,
      },
    },
    '& .image-section': {
      width: '100%',
      height: 250,
      position: 'relative',
      marginBottom: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
  },
  '& .tail_info_card': {
    backgroundColor: theme.palette.common.white,
    padding: 10,
    borderRadius: 10,
  },
}))

const InnvocationComponent = () => {
  return (
    <StyledLeadersSection>
      <Container maxWidth="md" component="div" className="main-section">
        <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
          <Grid size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <Box
              component="div"
              sx={(theme)=>({
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'stretch',
                [theme.breakpoints.only('xs')]:{
                  minHeight:300
                }
              })}
            >
              <Grid width="100%" container spacing={2}>
                <Grid position="relative" size={6}>
                  <NextImage
                    style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                    src="/images/9.jpeg"
                    alt="tail-1"
                    fill
                  />
                </Grid>
                <Grid size={6} container direction="column">
                  <Grid position="relative" size="grow">
                    <NextImage
                      style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                      src="/images/10.webp"
                      alt="tail-1"
                      fill
                    />
                  </Grid>
                  <Grid>
                    <Box component="div" className="tail_info_card">
                      <Typography textAlign="center" variant="h5">
                        10,000+
                      </Typography>
                      <Typography textAlign="center" fontSize={12} variant="body2">
                        Downloads
                      </Typography>
                      <Typography textAlign="center" fontSize={16} variant="body2">
                        In 1 Year
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <Box component="div" className="section-content">
              <Typography fontSize={12} variant="body2">
                OUR MENTORS
              </Typography>
              <Typography variant="h6">Innovative Strategies for Content Creators</Typography>
              <Typography variant="body2">
                OneInfo.ai is a groundbreaking platform at the forefront of digital innovation,
                transforming the way content creators and businesses engage with their audiences
                through our pioneering AI agent concept. Launched under the visionary umbrella of
                Nirbhavi Tech Innovations Private Limited—established in 2024—our platform is
                dedicated to accelerating business growth and creative output through smart
                automation
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledLeadersSection>
  )
}

export default InnvocationComponent
