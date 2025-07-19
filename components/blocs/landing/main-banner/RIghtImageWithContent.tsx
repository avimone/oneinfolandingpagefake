'use client'
import React from 'react'
import GradientButton from '@/components/buttons/Gradient'
import { Box, Card, Container, Grid, styled, Typography } from '@mui/material'
import NextImage from 'next/image'
import { useTheme, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'

const StyledDmHealper = styled(Container)(({ theme }) => ({
  paddingTop: 75,
  //paddingBottom: 50,
  [theme.breakpoints.only('xs')]: {
    paddingBottom: 0,
  },
  '& .grid-item': {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    [theme.breakpoints.only('xs')]: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  '& .MuiCard-root': {
    backgroundColor: '#4158D0',
    padding: 10,
    backgroundImage: `linear-gradient(144deg, #6D98E9 0%, #D499D9 46%, #E9CFAB 100%)`,
    borderRadius: 20,
    // minHeight: 300,
    position: 'relative',
    height: 'auto',
    overflow: 'visible',
  },
  '& .card-section': {
    display: 'flex',
    width: '100%',
    //minHeight: 300,
    height: 'auto',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    '& .MuiTypography-body1': {
      fontSize: 13,
      color: theme.palette.text.secondary,
    },
    '& .icon': {
      borderRadius: 10,
    },
  },
  '& .image-section': {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  '& .image-wrapper': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    [theme.breakpoints.only('xs')]: {
      bottom: 25,
    },
    '& .next_image': {
      width: '60%',
      [theme.breakpoints.only('xs')]: {
        width: '68%',
      },
    },
    '& .next_image_1': {
      width: '60%',
    },
  },
}))

interface RightImageWithContentProps {
  image: string
  title: string
  content?: string
  btnName: string
  onClickBtn: () => void
  imageClassName?: string
}

const containerImageVariants = {
  hidden: { opacity: 0, marginTop: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    marginTop: -40,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i }, // Adjust timing as needed
  }),
}

const containerVariants = {
  hidden: { opacity: 0, marginTop: -40 },
  visible: (i = 1) => ({
    opacity: 1,
    marginTop: 0,
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

const RightImageWithContent: React.FC<RightImageWithContentProps> = ({
  title,
  content,
  onClickBtn,
  btnName,
  image,
  imageClassName = 'next_image',
}) => {
  const theme = useTheme()
  const isXsDevice = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <StyledDmHealper maxWidth="md">
      <Card elevation={0}>
        <Box
          component="div"
          className="card-section"
          sx={{
            backgroundImage: 'url(/images/bg_dots_2.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            [theme.breakpoints.only('xs')]: {
              backgroundImage: 'url(/images/bg_dots.png)',
              backgroundPosition: 'bottom',
            },
          }}
        >
          <Grid
            sx={() => ({ width: '100%', minHeight: '300px', height: 'auto' })}
            container
            alignItems="center"
            justifyContent="stretch"
            direction={isXsDevice ? 'column-reverse' : 'row'}
          >
            <Grid size={{ xs: 12, sm: 6, lg: 6, md: 6, xl: 6 }}>
              <Box p={3} width="100%" sx={() => ({})}>
                <Grid
                  height="100%"
                  container
                  direction="column"
                  alignItems="start"
                  initial="hidden"
                  variants={containerVariants}
                  whileInView="visible"
                  component={motion.div}
                >
                  <Typography
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    component={motion.div}
                    gutterBottom
                    fontWeight={600}
                    variant="h5"
                  >
                    {title}
                  </Typography>
                  {content && (
                    <Typography
                      variants={childVariants}
                      initial="hidden"
                      whileInView="visible"
                      component={motion.div}
                      variant="body1"
                    >
                      {content}
                    </Typography>
                  )}
                  {!content && (
                    <>
                      <Typography
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        component={motion.div}
                        variant="subtitle1"
                      >
                        <b>Affiliate Links</b>
                      </Typography>
                      <Box mb={2}>
                        <Typography
                          variants={childVariants}
                          initial="hidden"
                          whileInView="visible"
                          component={motion.div}
                          variant="body1"
                        >
                          Niva offers integration of affiliate marketing links and boosts the
                          engagement of said links.
                        </Typography>
                      </Box>
                      <Typography
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        component={motion.div}
                        variant="subtitle1"
                      >
                        <b>1:1 Consultation Services</b>
                      </Typography>
                      <Box>
                        <Typography
                          variants={childVariants}
                          initial="hidden"
                          whileInView="visible"
                          component={motion.div}
                          variant="body1"
                        >
                          Sell your expertise and services to your fans on the oneinfo.ai app, with
                          integration for Niva AI.
                        </Typography>
                      </Box>
                    </>
                  )}

                  <Box
                    mt={2}
                    mb={2}
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    component={motion.div}
                  >
                    <GradientButton btnName={btnName} onClick={onClickBtn} />
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, lg: 6, md: 6, xl: 6 }}
              sx={{ backgroundImage: `url(/images/bg2.webp)` }}
              component="div"
              className="grid-item"
            >
              <Box
                component="div"
                className="image-section"
                sx={{ backgroundImage: `url(/images/bg2.webp)` }}
              >
                <Box
                  className="image-wrapper"
                  component={motion.div}
                  initial="hidden"
                  variants={containerImageVariants}
                  whileInView="visible"
                >
                  <NextImage
                    className={imageClassName}
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </StyledDmHealper>
  )
}

export default RightImageWithContent
