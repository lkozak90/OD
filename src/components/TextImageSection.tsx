"use client";
import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SlideIn } from "./SlideIn";

const StyledGridContainer = styled(Grid)<{ orientation: "left" | "right" }>(
  ({ theme, orientation }) => ({
    [theme.breakpoints.up("md")]: {
      height: "80vh",
      maxHeight: 700,
      flexDirection: orientation === "right" ? "row" : "row-reverse",

      "& .MuiStack-root": {
        height: "100%",
        ...(orientation === "right"
          ? { paddingLeft: "10vw" }
          : { paddingRight: "10vw" }),
      },
    },
  })
);

const StyledImageBox = styled(Box)<{ orientation: "left" | "right" }>(
  ({ theme, orientation }) => ({
    position: "relative",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "calc(60vw - 24px)",
      height: "100%",
      ...(orientation === "right" ? { left: 0 } : { right: 0 }),
    },
    "& img": {
      width: "100%",
      height: "auto",

      [theme.breakpoints.up("md")]: {
        position: "absolute",
        height: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: "cover",
        objectPosition: "center",
      },
    },
  })
);

interface TextImageSectionProps {
  title: string;
  text: string;
  button: React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  orientation: "left" | "right";
}

const TextImageSection = ({
  title,
  text,
  button,
  image,
  orientation,
}: TextImageSectionProps) => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <StyledGridContainer container spacing={3} orientation={orientation}>
          <Grid item xs={12} md={6}>
            <StyledImageBox orientation={orientation}>
              <Image width={720} height={480} src={image.src} alt={image.alt} />
            </StyledImageBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              alignContent="flex-end"
              flexDirection="row"
              flexWrap="wrap"
            >
              <SlideIn variant={orientation}>
                <Typography
                  variant="h4"
                  sx={{
                    width: "100%",
                  }}
                >
                  {title}
                </Typography>
              </SlideIn>
              <SlideIn variant={orientation}>
                <Typography variant="body1">{text}</Typography>
              </SlideIn>
              <SlideIn variant={orientation}>{button}</SlideIn>
            </Stack>
          </Grid>
        </StyledGridContainer>
      </Container>
    </Box>
  );
};

export { TextImageSection };
