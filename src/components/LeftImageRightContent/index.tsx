"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import NextImage from "next/image";
import { motion, Variants } from "framer-motion";

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  minHeight: 450,
  width: "100%",
  backgroundColor: theme.palette.common.white,
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  [theme.breakpoints.only("xs")]: {
    minHeight: 350,
    borderRadius: "12px",
  },
  "& .__next_image": {
    objectFit: "contain",
    objectPosition: "center",
    [theme.breakpoints.only("xs")]: {
      objectFit: "cover",
    },
    [theme.breakpoints.only("md")]: {
      objectFit: "contain",
    },
  },
}));

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
    rotateY: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      delay: 0.2,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 150,
      delay: 0.4,
    },
  },
  hover: {
    y: -3,
    scale: 1.05,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 300,
    },
  },
  tap: {
    y: 0,
    scale: 0.98,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 400,
    },
  },
};

interface LeftImageRightContentProps {
  imageUrl?: string;
  title?: string;
  btnName?: string;
  onBtnClick?: () => void;
  content?: string;
}

const LeftImageRightContent: React.FC<LeftImageRightContentProps> = ({
  imageUrl,
  title,
  btnName,
  onBtnClick,
  content,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          paddingLeft: theme.spacing(12),
          paddingRight: theme.spacing(12),
          paddingBottom: theme.spacing(10),
          [theme.breakpoints.only("xs")]: {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5),
            paddingTop: theme.spacing(3)
          },
          [theme.breakpoints.only("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
          [theme.breakpoints.only("md")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
          },
        })}
        disableGutters
        maxWidth="xl"
      >
        <Grid
          container
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              flexDirection: "column-reverse",
            },
            [theme.breakpoints.only("sm")]: {
              flexDirection: "column-reverse",
            },
          })}
          spacing={6}
          alignItems="center"
          justifyContent="stretch"
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <motion.div variants={imageVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateY: -2,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                  },
                }}
              >
                <StyledImageWrapper>
                  <NextImage
                    src={imageUrl as string}
                    alt="content-image"
                    fill={true}
                    className="__next_image"
                  />
                </StyledImageWrapper>
              </motion.div>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <motion.div variants={contentVariants}>
              <motion.div variants={titleVariants}>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                    [theme.breakpoints.only("xs")]: {
                      textAlign: "left",
                      fontSize: 32,
                      marginBottom: "20px",
                    },
                  })}
                  gutterBottom
                  variant="h3"
                >
                  {title}
                </Typography>
              </motion.div>
              
              <motion.div variants={textVariants}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body1"
                  sx={(theme) => ({
                    [theme.breakpoints.only("xs")]: {
                      textAlign: "left",
                      fontSize: 16,
                      marginBottom: "20px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    },
                  })}
                >
                  {content}
                </Typography>
              </motion.div>
              
           
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default LeftImageRightContent;
