"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#1C1C1E",
    },
    text: {
      secondary: "#6E6E73",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 84,
      fontWeight: 500,
      fontStyle: "medium",
      lineHeight: "100%",
      letterSpacing: 0,
    },
    h2: {
      fontSize: 75,
      fontWeight: 500,
      fontStyle: "medium",
      lineHeight: "100%",
      letterSpacing: 0,
    },
    h3: {
      fontSize: 48,
      fontWeight: 500,
      fontStyle: "medium",
      lineHeight: "120%",
      letterSpacing: 0,
    },
    h4: {},
    body1: {
      fontSize: 18,
      fontWeight: 400,
      fontStyle: "medium",
      lineHeight: "24px",
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "outlined",
        color: "primary",
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 5,
        },
      },
    },
  },
});

export default theme;
