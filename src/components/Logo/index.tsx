"use client";
import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

const LogoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const LogoBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1.5),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 400,
  color: theme.palette.primary.main,
  lineHeight: "14.67px",
  fontStyle: "regular",
}));

const Logo = () => {
  return (
    <LogoSection>
      <LogoBox>
        <Image
          src="/brands/oneinfologo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="mr-2  "
        />
        <LogoText variant="h6">OneInfo.ai</LogoText>
      </LogoBox>
    </LogoSection>
  );
};

export default Logo;
