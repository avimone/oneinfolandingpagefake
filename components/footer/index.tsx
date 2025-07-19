'use client'
import { Box, Container, Divider, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const StyledFooterComponent = styled(Container)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  padding: 50,
  '& .MuiTypography-body2': {
    fontSize: 13,
    paddingLeft: 12,
    width: '80%',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  '& a': {
    fontSize: 14,
    color: theme.palette.grey[700],
  },
  '& .logo-section': {
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}))

const FooterComponent = () => {
  const pathName = usePathname()
  return (
    <StyledFooterComponent
      sx={{ backgroundImage: `url(/images/bg.jpg)` }}
      maxWidth="xl"
      disableGutters
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3, lg: 3, sm: 6, xl: 3 }}>
          <Box component="div" className="logo-section">
            <Box>
              <NextLink href="/">
                <img width={150} alt="logo" src="/icons/logo.svg" />
              </NextLink>
            </Box>
            <Box>
              <Typography variant="body2">
                Your all-in-one AI assistant for smarter living and working.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3, lg: 3, sm: 6, xl: 3 }}>
          <Box mt={1}>
            <Box>
              <Typography fontWeight={600} fontSize={16} variant="subtitle1">
                Legal
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={0.2}>
                <Grid size={{ xs: 12 }}>
                  <NextLink
                    style={{
                      ...(pathName === '/privacy-policy' && {
                        fontWeight: 600,
                        color: '#000000',
                      }),
                    }}
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <NextLink
                    style={{
                      ...(pathName === '/terms-conditions' && {
                        fontWeight: 600,
                        color: '#000000',
                      }),
                    }}
                    href="/terms-conditions"
                  >
                    Terms of Service
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <NextLink
                    style={{
                      ...(pathName === '/refound-policy' && {
                        fontWeight: 600,
                        color: '#000000',
                      }),
                    }}
                    href="/refound-policy"
                  >
                    Refund Policy
                  </NextLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3, lg: 3, sm: 6, xl: 3 }}>
          <Box mt={1}>
            <Box>
              <Typography fontWeight={600} fontSize={16} variant="subtitle1">
                Company
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={0.2}>
                <Grid size={{ xs: 12 }}>
                  <NextLink
                    style={{
                      ...(pathName === '/about' && {
                        fontWeight: 600,
                        color: '#000000',
                      }),
                    }}
                    href="/about"
                  >
                    About Us
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <NextLink
                    style={{
                      ...(pathName === '/contact' && {
                        fontWeight: 600,
                        color: '#000000',
                      }),
                    }}
                    href="/contact"
                  >
                    Contact Us
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <NextLink href="#">Your Data</NextLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3, lg: 3, sm: 6, xl: 3 }}>
          <Box mt={1}>
            <Box>
              <Typography fontWeight={600} fontSize={16} variant="subtitle1">
                Connect
              </Typography>
            </Box>
            <Box mt={1}>
              <Grid container alignItems="center" spacing={1.5}>
                <Grid>
                  <IconButton
                    onClick={() => {
                      window.open('https://www.linkedin.com/company/join-one-info/')
                    }}
                    sx={{ padding: 0 }}
                  >
                    <img style={{ borderRadius: 5 }} width={28} src="/icons/in.svg" />
                  </IconButton>
                </Grid>
                <Grid>
                  <IconButton
                    onClick={() => {
                      window.open('https://www.youtube.com/@joinoneinfo')
                    }}
                    sx={{ padding: 0 }}
                  >
                    <img style={{ borderRadius: 5 }} width={28} src="/icons/youtube.png" />
                  </IconButton>
                </Grid>
                <Grid>
                  <IconButton
                    onClick={() => {
                      window.open('https://www.instagram.com/joinoneinfo/')
                    }}
                    sx={{ padding: 0 }}
                  >
                    <img style={{ borderRadius: 5 }} width={28} src="/icons/insta.png" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="md">
            <Divider />
            <Box mt={2}>
              <Grid container alignItems="center" justifyContent="center">
                <Typography textAlign="center" variant="body2">
                  &#x00A9; OneInfo.AI. All rights reserved
                </Typography>
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </StyledFooterComponent>
  )
}

export default FooterComponent
