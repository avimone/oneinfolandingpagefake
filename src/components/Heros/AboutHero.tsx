"use client";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import NextImage from "next/image";

const StyledHero = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "650px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.only("xs")]: {
    minHeight: "750px",
  },
  "& .MuiTypography-h2": {
    fontWeight: 500,
    [theme.breakpoints.only("xs")]: {
      fontSize: 48,
      marginBottom: 75,
    },
  },
  "& .MuiTypography-h3": {
    fontWeight: 500,
  },
  "& .MuiTypography-h4": {
    fontWeight: 500,
    color: "white",
    fontSize: 48,
  },
}));
const AboutHero = () => {
  return (
    <StyledHero>
      <Container maxWidth="md">
        <Typography gutterBottom textAlign="center" sx={{ color: "white"}} variant="h2">
          Empowering the Next Gen of Creators with AI 
        </Typography>
        <Box mt={10}>
          <Grid container spacing={{xs:4}}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box
                sx={(theme) => ({
                  borderRight: `1px solid ${theme.palette.grey[300]}`,
                  [theme.breakpoints.only("xs")]: {
                    borderRight: "none",
                  },
                })}
              >
                <Typography textAlign="center" variant="h4">
                  2025
                </Typography>
                <Typography sx={{ color: "white" }} textAlign="center">
                  Launched
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box
                sx={(theme) => ({
                 
                  [theme.breakpoints.only("xs")]: {
                    borderRight: "none",
                  },
                })}
              >
                <Typography textAlign="center" variant="h4">
                  10K+
                </Typography>
                <Typography sx={{ color: "white" }} textAlign="center">
                  Creators
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <NextImage
        src="/images/15.png"
        alt="about-hero"
        fill
        className="object-cover object-top z-[-1]"
        priority={true}
      />
    </StyledHero>
  );
};
export default AboutHero;
