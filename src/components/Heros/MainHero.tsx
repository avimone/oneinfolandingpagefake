'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Box, colors, Container, Grid, styled, Typography } from '@mui/material'
import NextImage from 'next/image'
import { APPELE_STORE_LINK, PLAY_STORE_LINK } from '@/utils/constants'

const StyledMainHeroWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 100,
  backgroundColor: theme.palette.common.white,
  '& .hero-content': {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    '&.animate': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '& .hero-image': {
    opacity: 0,
    transform: 'translateX(30px) scale(0.95)',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
    '&.animate': {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
    },
  },
  '& .app-store-buttons': {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
    '&.animate': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '& .creator-stats': {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
    '&.animate': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  [theme.breakpoints.only('xs')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    minHeight: 'auto',
  },
  [theme.breakpoints.only('xs')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: 'auto',
  },
  [theme.breakpoints.only('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    minHeight: 'auto',
  },
  '& .main-grid': {
    boxSizing: 'border-box',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      padding: theme.spacing(2),
    },
    '& .MuiTypography-h1': {
      width: '70%',
      color: theme.palette.primary.main,
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 'clamp(1.5rem, 6vw, 2rem)',
        lineHeight: 1.3,
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: 44,
        lineHeight: 1.3,
        textAlign: 'center',
      },
      [theme.breakpoints.only('sm')]: {
        fontSize: 65,
        lineHeight: 1.3,
        paddingLeft: 50,
        paddingRight: 50,
      },
    },
    '& .MuiTypography-body1': {
      width: '100%',
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      lineHeight: 1.6,
      fontWeight: 400,
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: '160%',
        fontStyle: 'normal',
        paddingLeft: 20,
        paddingRight: 20,
        color: theme.palette.text.secondary,
      },
    },
  },
  '& .right__image__wrapper': {
    height: 'auto',
    width: '100%',
    maxWidth: 600,
    aspectRatio: '3/4',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      height: 600,
      width: '80%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 500,
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      height: 400,
      width: '100%',
      maxWidth: 400,
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.only('sm')]: {
      height: 500,
      maxWidth: 300,
    },
  },
  span: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(0.5),
  },
}))

const MainHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      disableGutters
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.only('xs')]: {
          paddingLeft: theme.spacing(2.5),
          paddingRight: theme.spacing(2.5),
          paddingTop: theme.spacing(3),
        },
        [theme.breakpoints.only('sm')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.only('md')]: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
      })}
      maxWidth="xl"
    >
      <StyledMainHeroWrapper>
        <Grid
          container
          component="div"
          className="main-grid"
          alignItems="center"
          spacing={{ xs: 4, sm: 6, md: 3 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={{ xs: 2, sm: 3, md: 4 }}
            size={{ xs: 12, sm: 12, md: 6.5, lg: 6.5, xl: 6.5 }}
            className={`hero-content ${isVisible ? 'animate' : ''}`}
            sx={(theme) => ({
              order: { xs: 1, md: 1 },
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
              },
            })}
          >
            <Grid container spacing={1} size={12}>
              <Grid size={12}>
                <Typography variant="h1" component="h1">
                  Your AI Agent for Reels, Replies & Creator Growth
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography
                  sx={(theme) => ({
                    textAlign: { xs: 'center', md: 'left' },
                  })}
                  color="textSecondary"
                  variant="body1"
                  component="p"
                >
                  Configure your DMs. Schedule your content. Land brand deals, effortlessly.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              className={`app-store-buttons ${isVisible ? 'animate' : ''}`}
              sx={(theme) => ({
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              })}
              size={12}
            >
              <Grid size="auto">
                <NextImage
                  onClick={() => {
                    window.open(APPELE_STORE_LINK, '_blank')
                  }}
                  src="/images/app_store.svg"
                  alt="app_store"
                  width={120}
                  height={40}
                  style={{
                    width: 'auto',
                    height: 'clamp(35px, 5vw, 50px)',
                  }}
                />
              </Grid>
              <Grid size="auto">
                <NextImage
                  src="/images/google-play.svg"
                  alt="google_play"
                  width={120}
                  height={40}
                  onClick={() => {
                    window.open(PLAY_STORE_LINK, '_blank')
                  }}
                  style={{
                    width: 'auto',
                    height: 'clamp(35px, 5vw, 50px)',
                  }}
                />
              </Grid>
            </Grid>
            <Grid size={12} className={`creator-stats ${isVisible ? 'animate' : ''}`}>
              <Typography
                sx={(theme) => ({
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  marginTop: { xs: 2, sm: 0 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'left',
                  },
                  gap: 2,
                })}
                variant="body2"
                component="div"
              >
                <Fragment>
                  <p
                    style={{
                      color: '#6E6E73',
                    }}
                  >
                    <span>Used and helping over</span> 10K+ Creators
                  </p>
                </Fragment>
                <img height={20} src="./icon/Globe.svg" />
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            size={{ xs: 12, sm: 12, md: 5, lg: 5.5, xl: 5.5 }}
            className={`hero-image ${isVisible ? 'animate' : ''}`}
            sx={(theme) => ({
              order: { xs: 2, md: 2 },
            })}
          >
            <Box component="div" className="right__image__wrapper">
              <NextImage
                fill={true}
                quality={100}
                src="/images/hero_1.png"
                alt="hero_image"
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </StyledMainHeroWrapper>
    </Container>
  )
}

export default MainHero
