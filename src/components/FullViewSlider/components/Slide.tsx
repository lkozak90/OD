"use client";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import React from "react";

interface SlideProps {
  img: { src: string; alt: string };
  title: string;
  text: string;
}

export const Slide = ({ img, title, text }: SlideProps) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", position: "relative" }}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
        }}
        src={img.src}
        alt={img.alt}
      />
      <Stack zIndex={1} alignItems="center">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h5" component="p">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};
