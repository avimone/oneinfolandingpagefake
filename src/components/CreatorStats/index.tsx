'use client'
import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '80px 20px',
  backgroundColor: "white",
  [theme.breakpoints.only('xs')]: {
    padding: '60px 20px',
  },
}))

const StatsSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '1000px',
  margin: '0 auto',
}))

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: '1.2',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    lineHeight: '1.3',
    marginBottom: theme.spacing(3),
  },
}))

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  },
}))

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '56px',
  fontWeight: 700,
  color: '#1a1a1a',
  lineHeight: '1',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  },
}))

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  color: '#666666',
  textTransform: 'capitalize',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}))

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: '#4a4a4a',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
    lineHeight: '1.5',
  },
}))

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
}

interface StatData {
  number: string
  label: string
}

const statsData: StatData[] = [
  {
    number: '10,000+',
    label: 'Creators onboarded',
  },
  {
    number: '2M+',
    label: 'DMS',
  },
  {
    number: '5M+',
    label: 'Total Comments',
  },
]

const CreatorStats: React.FC = () => {
  return (
    <StyledContainer maxWidth={false}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <StatsSection>
          <motion.div variants={itemVariants}>
            <MainTitle>
              Powering the Next Generation of Creators
            </MainTitle>
          </motion.div>

          <motion.div variants={statsVariants}>
            <StatsContainer>
              {statsData.map((stat, index) => (
                <StatItem key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsContainer>
          </motion.div>

          <motion.div variants={itemVariants}>
            <DescriptionText>
              Thousands of creators trust our platform every day to manage conversations, grow their audience, and turn engagement into real opportunities.
            </DescriptionText>
          </motion.div>
        </StatsSection>
      </motion.div>
    </StyledContainer>
  )
}

export default CreatorStats
