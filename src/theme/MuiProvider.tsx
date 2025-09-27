"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

interface MuiProviderProps {
  children?: React.ReactNode;
}

const MuiProvider: React.FC<MuiProviderProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MuiProvider;
