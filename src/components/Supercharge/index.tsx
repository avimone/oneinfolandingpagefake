'use client'
import React from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import NextImage from 'next/image'
import { APPELE_STORE_LINK, PLAY_STORE_LINK } from '@/utils/constants'

const StyledSupercharge = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(12),
  paddingRight: theme.spacing(12),
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
  position: 'relative',
  minHeight: '400px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    minHeight: '450px',
  },
}))

const Supercharge = () => {
  return (
    <StyledSupercharge sx={{
      backgroundImage: `url('/images/14.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Typography
        sx={(theme) => ({
          color: 'white',
          [theme.breakpoints.only('xs')]: {
            textAlign: 'center',
            fontSize: 40,
            textSize: 'medium',
            lineHeight: '120%',
          },
        })}
        gutterBottom
        variant="h3"
      >
        Supercharge Your Creator Journey
      </Typography>
      <Typography
        sx={(theme) => ({
          color: 'white',
          textAlign: 'center',
          [theme.breakpoints.only('xs')]: {
            textAlign: 'center',
            fontSize: 16,
            textSize: 'medium',
            lineHeight: '24px',
            fontWeight: 400,
          },
        })}
        variant="body1"
      >
        Discover how OneInfo helps automate your reels, manage DMs, and grow faster — all powered by
        AI, built for creators.
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid size="auto">
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(APPELE_STORE_LINK, '_blank')
              }}
            >
              <NextImage src="/images/app_store.svg" alt="app_store" width={150} height={50} />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(PLAY_STORE_LINK, '_blank')
              }}
            >
              <NextImage src="/images/google-play.svg" alt="google-play" width={150} height={50} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledSupercharge>
  )
}

export default Supercharge
