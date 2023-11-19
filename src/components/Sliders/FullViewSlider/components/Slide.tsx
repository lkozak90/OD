"use client";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import React from "react";

interface SlideProps {
  img: { src: string; alt: string };
  title: string;
  text: string;
  primary?: boolean;
}

export const Slide = ({ img, title, text, primary }: SlideProps) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", position: "relative" }}
    >
      <Image
        fill
        priority={primary}
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
        }}
        src={img.src}
        alt={img.alt}
      />
      <Stack zIndex={1} alignItems="center" sx={{ p: 4, textAlign: "center" }}>
        <Typography
          variant="h1"
          {...(primary ? { component: "h1" } : { component: "h2" })}
        >
          {title}
        </Typography>
        <Typography variant="h2" component="p">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};
