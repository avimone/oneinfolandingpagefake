'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'

const StyledLeadersSection = styled(Box)(({ theme }) => ({
  paddingTop: 50,
  [theme.breakpoints.only('xs')]:{
    paddingTop: 40
  },
  '& .main-section': {
    backgroundImage: `linear-gradient(144deg, #6D98E9 0%, #D499D9 46%, #E9CFAB 100%)`,
    borderRadius: 20,
    padding: 15,
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

const Platform = () => {
  return (
   
      <StyledLeadersSection>
        <Container maxWidth="md" component="div" className="main-section">
          <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box
                component="div"
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'stretch',
                  [theme.breakpoints.only('xs')]: {
                    height: 300,
                  },
                })}
              >
                <Grid width="100%" container spacing={2}>
                  <Grid position="relative" size={6}>
                    <NextImage
                      style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                      src="/images/11.webp"
                      alt="tail-1"
                      fill
                    />
                  </Grid>
                  <Grid size={6} container direction="column">
                    <Grid position="relative" size="grow">
                      <NextImage
                        style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                        src="/images/12.webp"
                        alt="tail-1"
                        fill
                      />
                    </Grid>
                    <Grid>
                      <Box
                        sx={{ minHeight: 100, position: 'relative' }}
                        component="div"
                        className="tail_info_card"
                      >
                        <NextImage
                          style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                          src="/images/13.webp"
                          alt="tail-1"
                          fill
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box component="div" className="section-content">
                <Typography fontSize={12} variant="body2">
                  OUR COMMITMENT
                </Typography>
                <Typography variant="h6">More than just a platform</Typography>
                <Typography variant="body2">
                  At OneInfo.ai, we’re more than just a platform—we’re your strategic partner in
                  navigating the digital landscape. Our blend of cutting-edge technology, expert
                  leadership, and unparalleled mentorship is designed to accelerate your growth and
                  elevate your digital presence. Join us as we redefine digital interaction and
                  empower creators and businesses to scale faster, smarter, and more efficiently.
                  Embrace the future of digital innovation with OneInfo.ai, where technology meets
                  creativity.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledLeadersSection>
  
  )
}

export default Platform
