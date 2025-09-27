"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const MissionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F8F9FA",
  padding: "80px 0",
  overflow: "hidden",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1200px",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "40px",
    textAlign: "center",
  },
}));

const LeftContent = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: "120%",
  letterSpacing: 0,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    textAlign: "left",
  },
}));

const MainDescription = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: "32px",
  letterSpacing: 0,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "28px",
    textAlign: "left",
  },
}));

const DetailedDescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: "24px",
  letterSpacing: 0,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left",
    verticalAlign: "middle",
    fontStyle: "regular",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    lineHeight: "20px",
    textAlign: "left",
    verticalAlign: "middle",
    fontStyle: "regular",
    fontWeight: 700,
  },
}));

const RightContent = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "600px",
  borderRadius: "12px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "450px",
  },
}));

const MissionImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "center",
}));

const OurMission: React.FC = () => {
  return (
    <MissionContainer>
      <StyledContainer>
        <ContentWrapper>
          <LeftContent>
            <SectionTitle>Our Mission</SectionTitle>

            <MainDescription>
              Empowering every creator with smart tools and AI to grow, connect,
              and earn on their own terms.
            </MainDescription>

            <DetailedDescription color="textSecondary">
              We&apos;re on a mission to simplify and supercharge creator success —
              helping you turn content into meaningful connections, build a
              thriving community, and unlock brand collaborations effortlessly
              with the power of AI.
            </DetailedDescription>

            <CTAButton
              variant="outlined"
              onClick={() => {
                window.open('https://oneinfo.app.link/7UgnE8ITaOb', '_blank')
              }}
              endIcon={<img src="/icon/ArrowRight.svg" alt="send" />}
            >
              Discover how OneInfo helps you grow smarter
            </CTAButton>
          </LeftContent>

          <RightContent>
            <MissionImage
              src="/images/17.png"
              alt="Our Mission - Creator workspace with coffee, camera lens, and creative tools"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </RightContent>
        </ContentWrapper>
      </StyledContainer>
    </MissionContainer>
  );
};

export default OurMission;
