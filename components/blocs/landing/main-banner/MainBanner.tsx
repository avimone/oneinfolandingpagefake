'use client'
import React from 'react'
import { Box, Grid, styled, Typography, useTheme, useMediaQuery } from '@mui/material'
import NextImage from 'next/image'
import PlayStoreButton from '@/components/buttons/PlayStore'
import AppStoreButton from '@/components/buttons/AppStore'
import { motion } from 'framer-motion'

const StyledMainBannerContainer = styled(Box)(({ theme }) => ({
  minHeight: 550,
  backgroundColor: theme.palette.common.black,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingLeft: 50,
  paddingRight: 50,
  [theme.breakpoints.only('xs')]: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  [theme.breakpoints.only('sm')]: {
    paddingTop: 125,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  '& .MuiTypography-h3': {
    [theme.breakpoints.only('xs')]: {
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 20,
      textAlign: 'center',
    },
  },
  '& .MuiTypography-body1': {
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
      fontSize: 14,
    },
    [theme.breakpoints.only('sm')]: {
      textAlign: 'center',
    },
  },

  '& .grid-container': {
    minHeight: 550,
    width: '100%',
    '& .content-box': {
      width: '90%',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.only('sm')]: {
        width: '80%',
        margin: `auto auto`,
      },
    },
    '& .image-section': {
      width: 550,
      height: 400,
      [theme.breakpoints.only('sm')]: {
        width: 600,
        height: 400,
      },
      [theme.breakpoints.only('xs')]: {
        width: 300,
        height: 300,
      },
      marginTop: 40,
      position: 'relative',
      '& .next-image': {
        objectPosition: 'center',
        objectFit: 'contain',
        [theme.breakpoints.only('xs')]: {
          objectFit: 'contain',
        },
        [theme.breakpoints.only('sm')]: {
          objectFit: 'contain',
        },
      },
    },
  },
}))

const containerVariants = {
  hidden: { opacity: 0, marginTop: -10 },
  visible: (i = 1) => ({
    opacity: 1,
    marginTop: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i }, // Adjust timing as needed
  }),
}

const containerImageVariants = {
  hidden: { opacity: 0, marginLeft: -100 },
  visible: (i = 1) => ({
    opacity: 1,
    marginLeft: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i }, // Adjust timing as needed
  }),
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

const MainBanner = () => {
  const theme = useTheme()
  const isXsDevice = useMediaQuery(theme.breakpoints.only('xs'))
  const isSmXsDevice = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <StyledMainBannerContainer sx={{ backgroundImage: `url(/images/bg.jpg)` }}>
      <Grid component="div" className="grid-container" container>
        <Grid
          size={{ md: 6, xs: 12, sm: 12 }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            component={motion.div}
            initial="hidden"
            variants={containerVariants}
            animate="visible"
            size={{ xs: 12 }}
          >
            <Box className="content-box">
              <Typography
                variants={childVariants}
                initial="hidden"
                animate="visible"
                component={motion.div}
                variant="h3"
              >
                Follow your passion. Let AI handle the rest.
              </Typography>
              <Typography variant="body1">
                Our Niva AI assistant is your one stop helper for writing content, replying to DMs
                and boosting your reach.
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={isSmXsDevice ? 'center' : 'left'}
              gap={2}
              mt={3}
            >
              <PlayStoreButton />
              <AppStoreButton />
            </Box>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, lg: 6, md: 6, xl: 6 }}
          container
          alignItems="flex-end"
          justifyContent="left"
        >
          <Grid size={{ xs: 12 }} container alignItems="center" justifyContent="center">
            <Grid>
              <Box component={motion.div} initial="hidden"
                variants={containerImageVariants}
                animate="visible" className="image-section">
                <NextImage
                  src={isXsDevice ? '/images/_6.png' : '/images/hb.svg'}
                  alt="image"
                  fill={true}
                  className="next-image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid size={{ md: 6 }} container alignItems="flex-end" justifyContent="left">
          <Grid size={{ xs: 12 }} container alignItems="center" justifyContent="center">
            <Grid>
              <Box component="div" className="image-section">
                <NextImage
                  src={isXsDevice ? '/images/_6.png' : '/images/1.png'}
                  alt="image"
                  fill={true}
                  className="next-image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </StyledMainBannerContainer>
  )
}

export default MainBanner
