'use client'
import React from 'react'
import GradientButton from '@/components/buttons/Gradient'
import { Box, Card, Container, Grid, styled, Typography } from '@mui/material'
import NextImage from 'next/image'
import { motion } from 'framer-motion'

const StyledDmHealper = styled(Container)(({ theme }) => ({
  paddingTop: 75,
  [theme.breakpoints.only('xs')]: {
    paddingBottom: 0,
    paddingTop: 75,
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
    position: 'relative',
    height: 'auto',
    overflow: 'visible',
  },
  '& .card-section': {
    display: 'flex',
    width: '100%',
    height: 'auto',
    borderRadius: 10,
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

interface LeftImageWithContentProps {
  image: string
  title: string
  content?: string
  btnName: string
  onClickBtn: () => void
  contentComponent?: React.ReactNode
}

const containerImageVariants = {
  hidden: { opacity: 0, marginLeft: -200 },
  visible: (i = 1) => ({
    opacity: 1,
    marginLeft: 0,
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

export const childVariants = {
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

const LeftImageWithContent: React.FC<LeftImageWithContentProps> = ({
  title,
  content,
  onClickBtn,
  btnName,
  image,
  contentComponent,
}) => {
  return (
    <StyledDmHealper maxWidth="md">
      <Card elevation={0}>
        <Box
          className="card-section"
          sx={(theme) => ({
            backgroundImage: 'url(/images/bg_dots.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            [theme.breakpoints.only('xs')]: {
              backgroundPosition: 'bottom',
            },
          })}
        >
          <Grid
            sx={() => ({ width: '100%', minHeight: '300px', height: 'auto' })}
            container
            alignItems="center"
            justifyContent="stretch"
          >
            <Grid
              size={{ xs: 12, sm: 6, lg: 6, md: 6, xl: 6 }}
              sx={{ backgroundImage: `url(/images/bg2.webp)` }}
              component="div"
              className="grid-item"
            >
              <Box component="div" className="image-section">
                <Box
                  component={motion.div}
                  className="image-wrapper"
                  initial="hidden"
                  variants={containerImageVariants}
                  whileInView="visible"
                >
                  <NextImage
                    className="next_image"
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 6, md: 6, xl: 6 }}>
              <Box
                p={3}
                width="100%"
                sx={() => ({})}
                initial="hidden"
                variants={containerVariants}
                whileInView="visible"
                component={motion.div}
              >
                <Grid height="100%" container direction="column" alignItems="start">
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
                  {contentComponent && <>{contentComponent}</>}

                  <Box
                    mt={2}
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
          </Grid>
        </Box>
      </Card>
    </StyledDmHealper>
  )
}

export default LeftImageWithContent
