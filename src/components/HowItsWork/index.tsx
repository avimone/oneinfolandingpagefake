"use client";
import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NextImage from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cards = [
  {
    image: "/images/5.png",
    title: "Connect Instagram",
    description:
      "Link your account securely to unlock automation, track performance, and manage content all in one place.",
  },
  {
    image: "/images/6.png",
    title: "Pick Reel & Set Keywords",
    description:
      "Choose the reel you want to automate, then set the keywords that will trigger smart replies in the DMs.",
  },
  {
    image: "/images/7.png",
    title: "Let AI Auto-Reply in DMs",
    description:
      "Sit back while your AI agent replies to every relevant comment — with personalized messages, links, or offers.",
  },
];

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 1,
  minHeight: 300,
  height: "100%",
  margin: theme.spacing(0, 1),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
    minHeight: 280,
    margin: theme.spacing(0, 0.5),
  },
  "& .image__wrapper": {
    width: "100%",
    height: 250,
    position: "relative",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .slick-slider": {
    "& .slick-list": {
      margin: "0 -8px",
      [theme.breakpoints.down("sm")]: {
        margin: "0 -4px",
      },
    },
    "& .slick-track": {
      display: "flex",
      alignItems: "stretch",
    },
    "& .slick-slide": {
      padding: "0 8px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 4px",
      },
      "& > div": {
        height: "100%",
      },
    },
    "& .slick-dots": {
      bottom: "-50px",
      "& li": {
        margin: "0 4px",
        "& button": {
          "&:before": {
            fontSize: "12px",
            color: theme.palette.primary.main,
            opacity: 0.5,
          },
        },
        "&.slick-active button:before": {
          opacity: 1,
        },
      },
    },
  },
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  //backgroundColor: theme.palette.background.paper,
  //border: `1px solid ${theme.palette.grey[300]}`,
  //boxShadow: theme.shadows[2],
  width: 40,
  height: 40,
  padding: 0,
  "&:hover": {
    backgroundColor: theme.palette.grey[50],
  },
}));

const HowItsWork = () => {
  const sliderRef = useRef<Slider>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const renderCard = (card: (typeof cards)[0], idx: number) => (
    <div key={idx}>
      <StyledCard>
        <Box component="div" className="image__wrapper">
          <NextImage
            src={card.image}
            alt={card.title}
            fill={true}
            className="object-center object-cover"
          />
        </Box>
        <Box>
          <Typography color="primary" gutterBottom variant="h6">
            {card.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body2">
            {card.description}
          </Typography>
        </Box>
      </StyledCard>
    </div>
  );

  return (
    <Container
      sx={(theme) => ({
          backgroundColor:theme.palette.common.white,
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.only("md")]: {
           paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.only("sm")]: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.only("xs")]: {
          paddingTop: "0px",
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        },
      })}
      disableGutters
      maxWidth="xl"
    >
      <Grid container spacing={3}>
        <Grid size={12}>
          <Typography
            gutterBottom
            variant="h3"
            color="primary"
            sx={(theme) => ({
              [theme.breakpoints.only("xs")]: {
                textAlign: "left",
                fontSize: 32,
                textSize:"medium",
                lineHeight:"120%"
              },
            })}
          >
            How It Works
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body1"
            sx={(theme) => ({
              width: "70%",
              [theme.breakpoints.only("xs")]: {
                width: "100%",
                textAlign: "left",
                lineHeight:"24px",
                fontStyle:"regular",
                fontSize:"16px"
              },
            })}
          >
            From connecting your Instagram to chatting like a pro — here&apos;s how
            OneInfo helps creators automate replies, promote products, and build
            deeper audience relationships in just a few taps.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ position: "relative", marginTop: 4 }}>
            {isMobile ? (
              <>
                <SliderContainer>
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {cards.map((card, idx) => renderCard(card, idx))}
                  </Slider>
                </SliderContainer>
                <NavigationContainer>
                  <NavigationButton onClick={handlePrevClick}>
                    <img
                      width={35}
                      height={35}
                      src="/icon/sliderbtn.svg"
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </NavigationButton>
                  <NavigationButton onClick={handleNextClick}>
                    <img width={35} height={35} src="/icon/sliderbtn.svg" />
                  </NavigationButton>
                </NavigationContainer>
              </>
            ) : (
              <Grid
                container
                spacing={3}
                alignItems="stretch"
                justifyContent="stretch"
              >
                {cards.map((card, idx) => (
                  <Grid key={idx} size={{ sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <StyledCard>
                      <Box component="div" className="image__wrapper">
                        <NextImage
                          src={card.image}
                          alt={card.title}
                          fill={true}
                          className="object-center object-cover"
                        />
                      </Box>
                      <Box>
                        <Typography color="primary" gutterBottom variant="h6">
                          {card.title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom variant="body2">
                          {card.description}
                        </Typography>
                      </Box>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItsWork;
