'use client'
import DmHelper, { childVariants } from '@/components/blocs/landing/main-banner/LeftImageWithContent'
import MainBanner from '@/components/blocs/landing/main-banner/MainBanner'
import RightImageWithContent from '@/components/blocs/landing/main-banner/RIghtImageWithContent'
import WeDoBetter from '@/components/blocs/landing/main-banner/WeDoBetter'
import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const handleGetStarted = () => {
  window.open('https://oneinfo.app.link/7UgnE8ITaOb', '_blank')
}

const HomePage = () => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <MainBanner />
        <WeDoBetter />
        <DmHelper
          btnName="Get Started"
          image="/images/_3.png"
          onClickBtn={handleGetStarted}
          title="DM Helper"
          contentComponent={
            <Typography
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              component={motion.div}
              variant="body1"
            >
              Deliver fast, automated responses <b>24/7</b> Respond to stories and DMs even when you are
              not around and share links of products and services.
            </Typography>
          }
        />
        <RightImageWithContent
          btnName="Get Started"
          image="/images/_5.png"
          onClickBtn={handleGetStarted}
          title="Revenue Boost"
        />
        <DmHelper
          btnName="Get Started"
          image="/images/_4.png"
          onClickBtn={handleGetStarted}
          title="Personality Capture"
          content="We use AI to analyze user behavior and brand presence to create more natural and inviting conversations for users during interactions. This greatly increases user retention and kickstarts your growth with far less effort compared to traditional methods. "
        />
        <RightImageWithContent
          btnName="Get Started"
          image="/images/chat.png"
          onClickBtn={handleGetStarted}
          title="Revenue Boost"
          content="Helps you come up with new ideas, stories, caption and helps you find trending topics in your niche. Offers data driven strategic upload times to boost interaction and user retention. Creates daily reports of your posts, stories and comments to help you visualize you journey and growth. "
        />
      </Container>
    </>
  )
}

export default HomePage
