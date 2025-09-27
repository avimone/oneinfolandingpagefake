"use client";
import React, { useEffect, useState } from "react";
import { Box, colors, Container, Grid, styled, Typography } from "@mui/material";
import NextImage from "next/image";

const StyledBrandsWrapper = styled(Box)(({ theme }) => ({
  padding: 100,
  backgroundColor: theme.palette.common.white,
  "& .brands-content": {
    opacity: 0,
    transform: "translateY(30px)",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "&.animate": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "& .brand-logo": {
    opacity: 0,
    transform: "translateY(20px) scale(0.9)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    "&.animate": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  },
  [theme.breakpoints.only("xs")]: {
    padding: 20,
  },
  [theme.breakpoints.only("sm")]: {
    padding: 40,
    marginBottom: 50,
  },
  [theme.breakpoints.only("md")]: {
    padding: 40,
    marginBottom: 50,
    marginTop: 50,
  },

  "& .MuiTypography-h3": {
    textAlign: "left",
    fontSize: 48,
    marginBottom: 20,
    lineHeight: "120%",
    fontStyle: "medium",
    fontWeight: 500,
    color:theme.palette.primary.main,
  },
  "& .MuiTypography-body1": {
    textAlign: "left",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    fontStyle: "regular",
    color: theme.palette.text.secondary,
    marginBottom: 30,
  },
  "& .brand__image": {
    objectFit: "cover",
    objectPosition:'center',
    [theme.breakpoints.only('md')]:{
     // objectFit: "contain",
    }

  },
}));

const brandLogos = [
  "/brands/seeta.svg",
  "/brands/murgan.svg",
  "/brands/greenTrend.svg",
  "/brands/houmore.svg",
  "/brands/nika.svg",
  "/brands/amavi.svg",
  "/brands/pmj.svg",
  "/brands/krishna.svg",
];

const BrandImage = ({ imageUrl, index, isVisible }: { imageUrl: string; index: number; isVisible: boolean }) => {
  return (
    <Box 
      className={`brand-logo ${isVisible ? 'animate' : ''}`}
      sx={{ 
        width: "100%", 
        height: 70, 
        position: "relative",
        transitionDelay: `${index * 0.1}s`,
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      <NextImage
        src={imageUrl}
        alt="brand-logo"
        fill={true}
        blurDataURL={imageUrl}
        placeholder="blur"
        className="brand__image"
      />
    </Box>
  );
};

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.brands-wrapper');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Container disableGutters maxWidth="xl">
      <StyledBrandsWrapper className="brands-wrapper">
        <Grid container alignItems="center" spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} className={`brands-content ${isVisible ? 'animate' : ''}`}>
            <Typography gutterBottom variant="h3">
              Why OneInfo Works for Creators
            </Typography>
            <Typography variant="body1">
              Smart. Simple. Gen Z-ready. We built OneInfo to give modern
              creators the AI edge, from growing on Instagram to configuring
              replies and landing brand deals.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
            <Box>
              <Grid container spacing={4}>
                {brandLogos.map((logo, index) => (
                  <Grid key={logo} size={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
                    <BrandImage imageUrl={logo} index={index} isVisible={isVisible} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </StyledBrandsWrapper>
    </Container>
  );
};

export default Brands;
