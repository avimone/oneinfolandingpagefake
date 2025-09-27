'use client'
import Brands from '@/components/Brands/Brands'
import Creators from '@/components/Creators'
import FAQ from '@/components/FAQ'
import MainHero from '@/components/Heros/MainHero'
import HowItsWork from '@/components/HowItsWork'
import LeftImageRightContent from '@/components/LeftImageRightContent'
import RightImageLeftContent from '@/components/RightImageLeftContent'
import TestimonialSlider from '@/components/TestimonialSlider'
import { APP_DOWNLOAD_URL } from '@/utils/constants'
import { Fragment } from 'react'
import { Box } from '@mui/material'
import Supercharge from '@/components/Supercharge'
import CreatorStats from '@/components/CreatorStats'

const HomePage = () => {
  const handleNavigation = () => {
    window.open(APP_DOWNLOAD_URL, '_blank')
  }

  return (
    <Fragment>
      <MainHero />
      <CreatorStats />
     
      <LeftImageRightContent
        title="Our AI Cuts through your clutter of DMs and unearths the diamond (a brand deal) without you ever even lifting your finger"
        imageUrl="/images/1.png"
        content={`Only high-value collaboration opportunities are filtered by our AI and delivered directly to your inbox, without middlemen. More earnings, less noise.`}
        btnName="Learn More"
        onBtnClick={handleNavigation}
      />
      <RightImageLeftContent
        title="Your Growth Hacker - helps track growth metrics important to you and for your business"
        imageUrl="/images/3.png"
        btnName="Learn More"
        onBtnClick={handleNavigation}
        content={`
Key stats like new followers, profile views, and auto-replies are tracked and visualized daily, so performance can be monitored in real-time.
      `}
      />
      <LeftImageRightContent
        title="Fans expect quick replies, even when you’re offline or asleep."
        imageUrl="/images/2.png"
        content={`AI-powered DMs are triggered instantly from reel comments using pre-set keywords, working 24/7 to engage, promote, and convert.`}
        btnName="Learn More"
        onBtnClick={handleNavigation}
      />
      <RightImageLeftContent
        title="Your Intelligent Assistant - pure magic that understands conversations and responds tirelessly - posting, replying and keeping up with your users"
        imageUrl="/images/4.png"
        btnName="Learn More"
        onBtnClick={handleNavigation}
        content={`
Automate it all.
Our AI schedules content, upgrades visuals, and links DMs — so you can grow effortlessly.
      `}
      />
      <HowItsWork />
     
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      >
        <TestimonialSlider />
      </Box>

      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
        }}
      >
        <Creators />
      </Box>

      <FAQ />
      <Supercharge />
    </Fragment>
  )
}
export default HomePage
