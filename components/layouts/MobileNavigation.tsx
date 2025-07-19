'use client'
import React from 'react'
import { Grid, styled, Toolbar } from '@mui/material'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const StyledMobileNavigation = styled('div')(() => ({
  width: '100%',
  backgroundColor: 'white',
  '& .MuiToolbar-root': {
    alignItem: 'center',
    justifyContent: 'center',
    height: 100,
  },
}))

const MobileNavigation = () => {
  const pathName = usePathname()

  return (
    <StyledMobileNavigation>
      <Toolbar disableGutters>
        <Grid container direction="column" justifyContent="center" spacing={1}>
          <Grid container alignItems="center" justifyContent="center">
            <NextLink href="/">
              <img width={130} alt="logo" src="/icons/logo.png" />
            </NextLink>
          </Grid>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid>
              <NextLink
                href="/"
                style={{
                  ...(pathName === '/' && {
                    fontWeight: 600,
                    color: '#000000',
                  }),
                }}
              >
                Home
              </NextLink>
            </Grid>
            <Grid>
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
            <Grid>
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
          </Grid>
        </Grid>
      </Toolbar>
    </StyledMobileNavigation>
  )
}

export default MobileNavigation
