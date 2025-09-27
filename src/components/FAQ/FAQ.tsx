'use client'
import React, { useState } from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '80px 20px',
  background: theme.palette.common.white,
  [theme.breakpoints.only('xs')]: {
    padding: '40px 20px',
  },
}))

const FAQWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '64px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '40px',
  },
}))

const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: '100px',
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: '100%',
  letterSpacing: 0,
  minWidth: '200px',
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
    minWidth: 'auto',
  },
}))

const FAQContent = styled(Box)(({ theme }) => ({
  flex: 1,
}))

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
  borderBottom: `1px solid #E5E5E7`,
  borderRadius: '0 !important',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
  '&:last-child': {
    borderBottom: 'none',
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: '24px 0',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '24px',
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.primary.main,
    '&.Mui-expanded': {
      transform: 'rotate(0deg)',
    },
  },
}))

const QuestionText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: theme.palette.primary.main,
  lineHeight: '24px',
  letterSpacing: 0,
}))

const AnswerText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: '22px',
  letterSpacing: 0,
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0 0 24px 0',
}))

const PlusIcon = styled('div')(({ theme }) => ({
  width: '20px',
  height: '20px',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
  },
  '&::before': {
    width: '20px',
    height: '2px',
    top: '9px',
    left: '0',
  },
  '&::after': {
    width: '2px',
    height: '20px',
    top: '0',
    left: '9px',
  },
}))

const MinusIcon = styled('div')(({ theme }) => ({
  width: '20px',
  height: '20px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    width: '20px',
    height: '2px',
    top: '9px',
    left: '0',
  },
}))

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How does Auto DM reply work?',
    answer:
      'When someone comments on your selected reel with your defined keyword, our AI sends them a custom DM instantly.',
  },
  {
    question: 'Can I pause or edit my DM automations?',
    answer:
      'Yes, you can pause, update, or delete your automation anytime from the Auto DM settings.',
  },
  {
    question: 'Do I need an Instagram Business account?',
    answer:
      "Yes, to connect with Instagram API you need a Business/Creator account (free to switch in IG settings).",
  },
  {
    question: 'Will brands DM me directly on OneInfo?',
    answer:
      "No, brands won't DM you directly on OneInfo. Instead, our AI filters high-value collaboration opportunities and delivers them directly to your email inbox, eliminating spam and ensuring you only see relevant brand partnership opportunities.",
  },
  {
    question: 'Can I schedule my content?',
    answer:
      "Yes, you can schedule reels with AI captions, hashtags & even attach Auto DM keywords.",
  },
]

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <StyledContainer
      sx={(theme) => ({
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.only('xs')]: {
          paddingTop: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.only('md')]: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
          paddingTop: theme.spacing(0),
        },
        [theme.breakpoints.only('sm')]: {
          paddingTop: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(0),
        },
      })}
      disableGutters
      maxWidth="xl"
    >
      <Grid container alignItems="center" spacing={4}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <FAQTitle>FAQ</FAQTitle>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <FAQContent>
            {faqData.map((faq, index) => (
              <StyledAccordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <StyledAccordionSummary
                  expandIcon={expanded === `panel${index}` ? <MinusIcon /> : <PlusIcon />}
                >
                  <QuestionText>{faq.question}</QuestionText>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <AnswerText>{faq.answer}</AnswerText>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </FAQContent>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default FAQ
