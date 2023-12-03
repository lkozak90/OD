"use client";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SlideIn } from "./SlideIn";

const StyledGridContainer = styled(Grid)<{ orientation: "left" | "right" }>(
  ({ theme, orientation }) => ({
    [theme.breakpoints.up("md")]: {
      flexDirection: orientation === "right" ? "row" : "row-reverse",
    },
  })
);

const StyledImageBox = styled(Box)(() => ({
  position: "relative",
  "& img": {
    width: "100%",
    height: "auto",
  },
}));

interface TextImageColumnsProps {
  title: string;
  text: string;
  img: {
    src: string;
    alt: string;
  };
  orientation: "left" | "right";
}

const TextImageColumns = ({
  title,
  text,
  img,
  orientation,
}: TextImageColumnsProps) => {
  return (
    <StyledGridContainer container spacing={3} orientation={orientation}>
      <Grid item xs={12} md={6}>
        <StyledImageBox>
          <Image width={720} height={480} src={img.src} alt={img.alt} />
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
        </Stack>
      </Grid>
    </StyledGridContainer>
  );
};

export { TextImageColumns };
