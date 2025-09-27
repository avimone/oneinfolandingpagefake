'use client'
import React, { useRef } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import NextImage from 'next/image'
import Slider from 'react-slick'

const creatorsData = [
  {
    id: 1,
    quote:
      'Managing DMs used to be chaotic — now it feels like I have a real assistant. OneInfo handles replies and lets me focus more on my reels and audience.',
    author: 'Sunkara Bhavya',
    title: 'Fashion & Style',
    company: '116K Followers',
    avatar: '/images/8.png',
  },
  {
    id: 2,
    quote:
      'I started using OneInfo for auto replies, but stayed for the brand DMs. The platform actually helped me land a collab in my second week!',
    author: 'Sri Navya Kala',
    title: 'Travel & Adventure',
    company: '191K Followers',
    avatar: '/testimonials/srinavyakala.png',
  },
  {
    id: 3,
    quote:
      'It’s smart, simple, and actually fun to use. The insights help me see what’s working and what’s not. Total game-changer for Insta creators like me.',
    author: 'Alekhya Subbarao',
    title: 'Fashion & Style',
    company: '32.6K Followers',
    avatar: '/testimonials/subbarao.png',
  },
  {
    id: 4,
    quote:
      'OneInfo is the only tool that actually sounds like me when replying. Fans don’t even realize it’s automated. Makes me feel 100x more professional.',
    author: 'Madhu',
    title: 'Fashion & Style',
    company: '206K Followers',
    avatar: '/testimonials/madhu.png',
  },
  {
    id: 5,
    quote:
      'As someone who gets tons of comments, OneInfo makes sure I don’t miss anyone. Love how the DM system works — clean and creator-first.',
    author: 'Kodimyala Rahul',
    title: 'Education & Tips',
    company: '237K Followers',
    avatar: '/testimonials/rahul.png',
  },
  {
    id: 6,
    quote:
      'The moment I connected Instagram, I knew this was built for creators. From replying to fans to tracking my growth — it’s all in one place.',
    author: 'Saduvu Rajashekar',
    title: 'Tech & Gadgets',
    company: '234K Followers',
    avatar: '/testimonials/saduvu.png',
  },
]

const galleryImages = [
  '/images/9.png',
  '/images/10.png',
  '/images/11.png',
  '/images/12.png',
  '/images/13.png',
]

// Styled Components
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-dots': {
    bottom: '-50px',
    '& li button:before': {
      fontSize: '12px',
      color: theme.palette.primary.main,
    },
  },
}))

const CreatorCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  minHeight: '500px',
  [theme.breakpoints.down('md')]: {
    minHeight: '450px',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
  },
}))

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: -60,
  width: '100%',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

const CreatorImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '250px',
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    height: '300px',
    borderRadius: '0px',
  },
}))

const NavigationButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  padding: 0,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}))



const Creators = () => {
  const sliderRef = useRef<Slider>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  }

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev()
  }

  const handleNextClick = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={(theme) => ({
        background: theme.palette.common.white,

        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.only('xs')]: {
          paddingTop: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(0),
        },
        [theme.breakpoints.only('md')]: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.only('sm')]: {
          paddingTop: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(0),
        },
      })}
    >
      <Grid size={12}>
        <Typography
          variant="h3"
          color="primary"
          sx={(theme) => ({
            width: '75%',
            marginBottom: theme.spacing(4),
            [theme.breakpoints.down('md')]: {
              width: '100%',
              textAlign: 'left',
              fontSize: 32,
              lineHeight: '120%',
            },
          })}
        >
          Don&apos;t just take our word for it — see what creators say.
        </Typography>
        <Typography
          color="text.secondary"
          variant="body1"
          sx={(theme) => ({
            width: '75%',
            marginBottom: theme.spacing(4),
            [theme.breakpoints.down('md')]: {
              width: '100%',
              textAlign: 'left',
              fontSize: 18,
              lineHeight: '26px',
              fontWeight: 400,
            },
          })}
        >
          From growing faster to landing real collabs, OneInfo is helping 10K+ creators upgrade
          their IG game with smart AI.
        </Typography>
      </Grid>

      {/* Mobile Slider Layout */}
      {isMobile && (
        <SliderContainer>
          <NavigationContainer>
            <NavigationButton onClick={handlePrevClick}>
              <img
                width={35}
                height={35}
                src="/icon/sliderbtn.svg"
                style={{ transform: 'rotate(180deg)' }}
              />
            </NavigationButton>
            <NavigationButton onClick={handleNextClick}>
              <img width={35} height={35} src="/icon/sliderbtn.svg" />
            </NavigationButton>
          </NavigationContainer>
    

          <Slider ref={sliderRef} {...sliderSettings}>
            {creatorsData.map((creator) => (
              <Box key={creator.id} sx={{ padding: '0 8px' }}>
                <CreatorCard>
                  <CreatorImage>
                    <NextImage
                      src={creator.avatar}
                      alt={creator.author}
                      fill={true}
                      className="object-cover"
                    />
                  </CreatorImage>
                  <Box mb={3}>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        marginBottom: 0.5,
                      }}
                    >
                      {creator.author}
                    </Typography>
                    <Typography color="primary" variant="caption" sx={{ fontSize: '14px' }}>
                      {creator.title} | {creator.company}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{
                        marginBottom: 2,
                        flexGrow: 1,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      {creator.quote}
                    </Typography>
                  </Box>
                </CreatorCard>
              </Box>
            ))}
          </Slider>
        </SliderContainer>
      )}
    </Container>
  )
}

export default Creators
