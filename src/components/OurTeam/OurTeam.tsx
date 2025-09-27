'use client'
import React from 'react'
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { KANALA_MOHAN, NIRANJAN, SASHI_MURTHY } from '@/utils/constants'

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '80px 20px',
  maxWidth: '1200px',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.only('xs')]: {
    padding: '40px 20px',
  },
}))

const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '80px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
}))

const LeftSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: '120%',
  letterSpacing: 0,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
    textAlign: 'left',
  },
}))

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: '24px',
  letterSpacing: 0,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    textAlign: 'left',
    lineHeight: '32px',
    letterSpacing: 0,
    marginBottom: theme.spacing(2),
  },
}))

const RightSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

const MentorText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: '22px',
  letterSpacing: 0,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    textAlign: 'left',
    lineHeight: '24px',
    letterSpacing: 0,
    textTransform: 'regular',
  },
}))

const TeamGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  // [theme.breakpoints.down("lg")]: {
  //   gridTemplateColumns: "repeat(2, 1fr)",
  // },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
  // [theme.breakpoints.only("md")]: {
  //   gridTemplateColumns: "1fr",
  // },
}))

const TeamCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
  position: 'relative',
  overflow: 'visible',
}))

const TeamImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '450px',
  // borderRadius: "12px",
  backgroundColor: '#5f5f5f',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: '450px',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}))

const TeamImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
  objectPosition: 'bottom',
}))

const LinkedInIconContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: '10px',
  width: '100%',
}))

const LinkedInIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="#0077B5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MemberName = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.common.white,
  lineHeight: '22px',
  letterSpacing: 0,
  marginBottom: theme.spacing(0.5),
}))

const MemberTitle = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  color: theme.palette.common.white,
  lineHeight: '18px',
  letterSpacing: 0,
}))

interface TeamMember {
  id: string
  name: string
  title: string
  image: string
  linkedinUrl?: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Niranjan Vojja',
    title: 'Founder & CEO',
    linkedinUrl: NIRANJAN,
    image: '/team/niranjan_pic.png', // You'll need to add these images
  },
  {
    id: '2',
    name: 'G. Shashidhara Murthy',
    title: 'Business Innovator & Strategic Mentor',
    image: '/team/sashi_pic.png',
    linkedinUrl: SASHI_MURTHY,
  },
  {
    id: '3',
    name: 'Srinivas Kumar Mohan',
    title: 'Senior Technology Strategist & Mentor',
    image: '/team/pic.png',
    linkedinUrl: KANALA_MOHAN,
  },
]

const OurTeam: React.FC = () => {
  return (
    <Box sx={(theme)=>({backgroundColor:theme.palette.common.white})}>
      <StyledContainer maxWidth="lg">
        <SectionWrapper>
          <LeftSection>
            <SectionTitle>Our Team</SectionTitle>
            <DescriptionText>
              OneInfo is built by creators, for creators — making it easier for Gen Z to grow,
              connect, and thrive on Instagram.
            </DescriptionText>
          </LeftSection>

          <RightSection>
            <MentorText>
              We&apos;re supported by top industry mentors who bring years of insight across tech,
              media, and creator economy. Their strategic guidance helps us stay sharp, scalable,
              and future-ready for every creator&apos;s success.
            </MentorText>
          </RightSection>
        </SectionWrapper>

        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.id}>
              <TeamImageContainer>
                <TeamImage src={member.image} alt={member.name} fill />
                <LinkedInIconContainer
                  onClick={() => {
                    window.open(member?.linkedinUrl, '_blank')
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid size="auto">
                      <Box
                        sx={{
                          height: 30,
                          width: 30,
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img src={'/icon/in.svg'} width={25} height={25} />
                      </Box>
                    </Grid>
                    <Grid size="grow">
                      <Box sx={{ padding: 0, width: '100%' }}>
                        <MemberName>{member.name}</MemberName>
                        <MemberTitle>{member.title}</MemberTitle>
                      </Box>
                    </Grid>
                  </Grid>
                </LinkedInIconContainer>
              </TeamImageContainer>
            </TeamCard>
          ))}
        </TeamGrid>
      </StyledContainer>
    </Box>
  )
}

export default OurTeam
