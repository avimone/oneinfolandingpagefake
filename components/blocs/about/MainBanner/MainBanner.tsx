'use client'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const StyledMainBanner = styled(Box)(({ theme }) => ({
  minHeight: 350,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '& .MuiTypography-h3': {
    color: theme.palette.common.white,
   
  },
  [theme.breakpoints.only('xs')]:{
    paddingTop:100
  }
}))

const MainBanner = () => {
  return (
    <StyledMainBanner
      sx={{
        backgroundImage: `linear-gradient(to right, #6D98E9A6, #D499D9A6 ,#E9CFABA6),url('/images/about-bg.webp')`,
      }}
    >
      <Typography variant="h3">About Us</Typography>
    </StyledMainBanner>
  )
}

export default MainBanner
