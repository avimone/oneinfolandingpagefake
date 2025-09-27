"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { INSTA_URL, LINKDEN_URL, YOUTUBE_URL } from "@/utils/constants";

const FooterContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
   background:theme.palette.common.white,
    paddingTop: theme.spacing(10),
  [theme.breakpoints.only("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
     marginTop: theme.spacing(10),
  },
  [theme.breakpoints.only('xs')]:{
     paddingTop: theme.spacing(4),
     marginTop: theme.spacing(0),
  }
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1200px",
}));

const LogoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.only("xs")]: {
    justifyContent: "left",
    marginBottom: theme.spacing(4),
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1.5),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: "29.33px",
  fontWeight: 400,
  color: theme.palette.primary.main,
  lineHeight: "14.67px",
  fontStyle: "regular",
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  [theme.breakpoints.only("xs")]: {
    justifyContent: "left",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E5E7",
  borderRadius: "8px",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "#F5F5F7",
    borderColor: "#D1D1D6",
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
    marginBottom: theme.spacing(4),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  lineHeight: "20px",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  textDecoration: "none",
  marginBottom: theme.spacing(1),
  lineHeight: "18px",
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

const CopyrightSection = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #E5E5E7",
  paddingTop: theme.spacing(3),
  marginTop: theme.spacing(6),
  textAlign: "center",
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: "18px",
}));

// Custom SVG Icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.582 6.186c-.23-1.482-1.4-2.65-2.88-2.88C16.943 3 12 3 12 3s-4.943 0-6.701.306c-1.48.23-2.65 1.398-2.88 2.88C2 8.075 2 12 2 12s0 3.925.418 5.814c.23 1.482 1.4 2.65 2.88 2.88C7.057 21 12 21 12 21s4.943 0 6.701-.306c1.48-.23 2.65-1.398 2.88-2.88C22 15.925 22 12 22 12s0-3.925-.418-5.814zM10 15.5v-7L16 12l-6 3.5z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr 1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {/* Logo and Social Media Section */}
          <Box>
            <LogoSection>
              <LogoBox>
                <Image
                  src="/brands/oneinfologo.svg"
                  alt="Logo"
                  width={35}
                  height={35}
                  className="mr-2  "
                />
                <LogoText variant="h4">OneInfo.ai</LogoText>
              </LogoBox>
            </LogoSection>
            <SocialIconsContainer>
              <SocialIcon
                onClick={() => {
                  window.open(LINKDEN_URL, "_blank");
                }}
              >
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon
                onClick={() => {
                  window.open(YOUTUBE_URL, "_blank");
                }}
              >
                <YouTubeIcon />
              </SocialIcon>
              <SocialIcon
                onClick={() => {
                  window.open(INSTA_URL, "_blank");
                }}
              >
                <InstagramIcon />
              </SocialIcon>
            </SocialIconsContainer>
          </Box>

          {/* Pages Section */}
          <Box>
            <FooterSection>
              <SectionTitle>Pages</SectionTitle>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterSection>
          </Box>

          {/* Resources Section */}
          <Box>
            <FooterSection>
              <SectionTitle>Resources</SectionTitle>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-conditions">Terms of Service</FooterLink>
              <FooterLink href="/refound-policy">Refund Policy</FooterLink>
            </FooterSection>
          </Box>

          {/* Support Section */}
          <Box>
            <FooterSection>
              <SectionTitle>Support</SectionTitle>
              <FooterLink href="/">Customer Support</FooterLink>
              <FooterLink href="/">Testimonials</FooterLink>
            </FooterSection>
          </Box>
        </Box>

        {/* Copyright Section */}
        <CopyrightSection>
          <CopyrightText>© OneInfo.AI. All rights reserved</CopyrightText>
        </CopyrightSection>
      </StyledContainer>
    </FooterContainer>
  );
};

export default Footer;
