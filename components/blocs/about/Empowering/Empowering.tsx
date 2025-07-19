'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'
import Gradient from '@/components/buttons/Gradient'
import {useRouter} from 'next/navigation';

const StyledSection = styled(Box)(({ theme }) => ({
  paddingTop: 50,
  [theme.breakpoints.only('xs')]: {
    paddingTop: 40,
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

const Empowering = () => {
  const router = useRouter();
  return (
    <StyledSection>
      <Container maxWidth="md" component="div" className="main-section">
        <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box component="div" className="section-content">
              <Typography fontSize={12} variant="body2">
                OUR MISSION AND OUR VISION
              </Typography>
              <Typography variant="h6">Empowering Creators and businesses</Typography>
              <Typography variant="body2">
                At OneInfo.ai, our mission is to empower content creators and businesses with
                advanced AI-driven tools that automate direct messages, manage comments, streamline
                script planning, provide deep analytics, and much more. By doing so, we enable you
                to focus on what truly matters: creating compelling content and driving business
                success.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'stretch',
                position: 'relative',
              }}
            >
              <Box
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  zIndex: 2,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                  alignItems: 'flex-end',
                  [theme.breakpoints.only('xs')]:{
                     height:200
                  }
                })}
              >
                <Box width="80%">
                  <Typography color="white" textAlign="right">
                    Our Platform helps your business and social media grow in an organic and
                    sustainable way
                  </Typography>
                </Box>
                <Gradient btnName="Contact Us" onClick={() => {
                  router.push('/contact')
                }} />
              </Box>
              <NextImage
                style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 10 }}
                src="/images/14.png"
                alt="tail-1"
                fill
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Empowering
