'use client'
import React, { useRef, useState } from 'react'
import { Box, Typography, Container, styled, Avatar, Button, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Slider from 'react-slick'
import { motion, Variants } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './testimonial-slider.css'

// Styled components for the testimonial cards
const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#eee9fe',
  borderRadius: '24px',
  padding: 0,
  margin: theme.spacing(1),
  height: '320px', // Fixed height instead of minHeight
  width: '100%',
  maxWidth: '800px', // Maximum width for consistency
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '280px',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    height: '360px',
    flexDirection: 'column',
  },
}))

const QuoteText = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 600,
  color: '#000',
  lineHeight: 1.4,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}))

const AuthorName = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  color: '#000',
  textTransform: 'uppercase',
}))

const AuthorTitle = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#666',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}))



const ImageSection = styled(Box)(({ theme }) => ({
  flex: '0 0 45%',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%', // Take full height of parent
  [theme.breakpoints.down('md')]: {
    flex: '0 0 40%',
    height: '50%', // Half height on tablet
  },
  [theme.breakpoints.down('sm')]: {
    flex: '1',
    height: '50%', // Half height on mobile
  },
}))

const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
}))

const DecorativeElements = styled(Box)(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  '& svg': {
    width: '20px',
    height: '20px',
    opacity: 0.4,
    color: '#666',
  },
}))



const NavigationContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  marginTop: '40px',
}))

const NavButton = styled(IconButton)(({ theme }) => ({
  width: '48px',
  height: '48px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  color: '#666',
  padding: 0,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#eee9fe',
    borderColor: '#A8E6A3',
    color: '#000',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
  },
  '&:disabled': {
    backgroundColor: '#f5f5f5',
    borderColor: '#e0e0e0',
    color: '#ccc',
    transform: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
}))

const CardWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0 16px',
}))

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 20,
      stiffness: 100,
      duration: 0.8,
    },
  },
}

// Testimonial data interface
interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  avatar: string
  backgroundColor?: string
}

// Sample testimonial data
const testimonialsData: Testimonial[] = [
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

const TestimonialSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '200px',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }



  const renderCard = (testimonial: Testimonial) => {
    return (
      <motion.div key={testimonial.id} variants={cardVariants}>
        <CardWrapper>
          <TestimonialCard className="testimonial-card">
            <ImageSection
              sx={{
                backgroundImage: `url(${testimonial.avatar})`,
              }}
            ></ImageSection>

            <ContentSection>
              <DecorativeElements>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </DecorativeElements>

              <Box>
                <QuoteText>&ldquo;{testimonial.quote}&rdquo;</QuoteText>
              </Box>

              <Box>
                <AuthorName
                  sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 700, mb: 0.5 }}
                >
                  {testimonial.author} ({testimonial.title})
                </AuthorName>
                <AuthorTitle sx={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>
                  {testimonial.company}
                </AuthorTitle>
              </Box>

            </ContentSection>
          </TestimonialCard>
        </CardWrapper>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ backgroundColor: '#fff' }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            color="primary"
            sx={(theme) => ({
              width: '100%',
              paddingLeft: theme.spacing(12),
              paddingRight: theme.spacing(12),
              marginBottom: theme.spacing(2),
              [theme.breakpoints.down('md')]: {
                width: '100%',
                textAlign: 'center',
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
              marginBottom: theme.spacing(4),
              [theme.breakpoints.down('md')]: {
                width: '100%',
                textAlign: 'center',
                fontSize: 18,
                lineHeight: '26px',
                fontWeight: 400,
              },
            })}
          >
            From growing faster to landing real collabs, OneInfo is helping 10K+ creators upgrade
            their IG game with smart AI.
          </Typography>
        </Box>

        <Box className="testimonial-slider">
          <Slider ref={sliderRef} {...settings}>
            {testimonialsData.map((testimonial) => renderCard(testimonial))}
          </Slider>
        </Box>

        {/* Custom Navigation */}
        <NavigationContainer>
          <NavButton onClick={goToPrev}>
            <img
              width={40}
              height={40}
              src="/icon/sliderbtn.svg"
              style={{ transform: 'rotate(180deg)' }}
            />
          </NavButton>

          <NavButton onClick={goToNext}>
            <img width={40} height={40} src="/icon/sliderbtn.svg" />
          </NavButton>
        </NavigationContainer>
      </Container>
    </motion.div>
  )
}

export default TestimonialSlider
