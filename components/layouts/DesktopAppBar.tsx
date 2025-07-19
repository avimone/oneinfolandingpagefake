'use client'
import { AppBar, Box, Card, Grid, styled, Toolbar } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface DesktopAppBarProps {
  navRef: React.Ref<HTMLDivElement> | undefined
}

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'transparent',
  '& .MuiToolbar-root': {
    alignItem: 'center',
    justifyContent: 'center',
    height: 100,
  },
}))

const DesktopAppBar: React.FC<DesktopAppBarProps> = ({ navRef }) => {
  const pathName = usePathname()

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Toolbar>
        <Card ref={navRef} elevation={3} component="div" className="navigation-bar">
          <Box p={2} width="100%">
            <Grid container alignItems="center" spacing={2}>
              <Grid size="grow">
                <NextLink href="/">
                  <img width={130} alt="logo" src="/icons/logo.png" />
                </NextLink>
              </Grid>
              <Grid>
                <NextLink
                  style={{
                    ...(pathName === '/' && {
                      fontWeight: 600,
                      color: '#000000',
                    }),
                  }}
                  href="/"
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
          </Box>
        </Card>
      </Toolbar>
    </StyledAppBar>
  )
}

export default DesktopAppBar
