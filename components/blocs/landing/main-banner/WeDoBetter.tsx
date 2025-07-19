'use client'
import { COLORS } from '@/theme/colors'
import {
  Box,
  Card,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import NextImage from 'next/image'
import { motion } from 'framer-motion'

const StyledWeDoBetterContainer = styled(Container)(({ theme }) => ({
  paddingTop: 75,
  paddingBottom: 75,
  [theme.breakpoints.only('xs')]: {
    paddingBottom: 40,
  },
  '& .MuiTypography-h4': {
    [theme.breakpoints.only('xs')]: {
      fontSize: 30,
      marginBottom: 10,
    },
  },
  '& .MuiCard-root': {
    backgroundColor: '#4158D0',
    padding: 6,
    backgroundImage: `linear-gradient(144deg, #6D98E9 0%, #D499D9 46%, #E9CFAB 100%)`,
    borderRadius: 5,
    height: 200,
    [theme.breakpoints.only('xs')]:{
      minHeight: 75,
      height: 'auto',
    }
  },
  '& .card-section': {
    height: '100%',
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    '& .MuiTypography-body1': {
      fontSize: 13,
    },
    '& .icon': {
      borderRadius: 10,
    },
  },
}))

interface CardComponentProps {
  icon: string
  content: string
}

const containerVariants = {
  hidden: { opacity: 0, marginTop: -50 },
  visible: (i = 1) => ({
    opacity: 1,
    marginTop: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i }, // Adjust timing as needed
  }),
}

const CardComponent: React.FC<CardComponentProps> = ({ icon, content }) => {
  const theme = useTheme()
  const isXsSmDevice = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <Card
      initial="hidden"
      variants={containerVariants}
      whileInView="visible"
      component={motion.div}
      elevation={0}
    >
      {isXsSmDevice && (
        <>
          <Box component="div" className="card-section" p={2}>
            <Grid
              spacing={2}
              container
              alignItems="center"
              // alignItems="center"
              // justifyContent="center"
            >
              <Grid size='auto'>
                <NextImage className="icon" src={icon} alt="insta" width={50} height={50} />
              </Grid>
              <Grid size='grow'>
                <Typography color={COLORS.TEXT_SECONDARY} variant="body1" textAlign="left">
                  {content}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      {!isXsSmDevice && (
        <Box component="div" className="card-section" p={2}>
          <Grid
            spacing={2}
            container
            direction={isXsSmDevice ? 'row' : 'column'}
            alignItems="center"
            justifyContent="center"
          >
            <Grid>
              <NextImage className="icon" src={icon} alt="insta" width={50} height={50} />
            </Grid>
            <Grid>
              <Typography color={COLORS.TEXT_SECONDARY} variant="body1" textAlign="center">
                {content}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Card>
  )
}

const WeDoBetter = () => {
  return (
    <StyledWeDoBetterContainer maxWidth="md">
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 8 }}
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        component={motion.div}
      >
        <Grid size={{ xs: 12 }}>
          <Typography gutterBottom fontWeight={600} variant="h4" textAlign="center">
            Here’s how we do it better.
          </Typography>
          <Typography color={COLORS.TEXT_SECONDARY} variant="body1" textAlign="center">
            Our cutting edge technology helps you in more ways than you’d think.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} container alignItems="center" justifyContent="stretch">
          <Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                <CardComponent
                  icon="/icons/insta.png"
                  content="Login to the Oneinfo App and link your Instagram profile with our platform. "
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                <CardComponent
                  icon="/icons/play.png"
                  content="Select the post or reel you want to utilise our services on."
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                <CardComponent
                  icon="/icons/Vector.png"
                  content="Define keywords and replies, and let Niva handle the rest."
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </StyledWeDoBetterContainer>
  )
}

export default WeDoBetter
