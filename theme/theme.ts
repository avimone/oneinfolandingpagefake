'use client'
import { createTheme } from '@mui/material/styles'
import { COLORS } from './colors'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    text: {
      secondary: COLORS.TEXT_SECONDARY,
    },
  },
  typography: {
    fontFamily: [poppins.style.fontFamily].join(','),
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // disableElevation:true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeLarge: {
          borderRadius: 100,
        },
        colorInherit: {
          backgroundColor: COLORS.WHITE,
          fontWeight: 400,
        },
      },
    },
  },
})

export default theme
