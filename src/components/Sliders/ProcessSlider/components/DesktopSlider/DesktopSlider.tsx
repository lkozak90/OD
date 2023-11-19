"use client";
import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { SlideText, Slider } from "./components";
import { Slide } from "../types";

interface DesktopSliderProps {
  slides: Slide[];
}

const DesktopSlider = ({ slides }: DesktopSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} mb="20vh">
          {slides.map(({ subtitle, title, text, features }, index) => (
            <SlideText
              key={index}
              id={index}
              subtitle={subtitle}
              title={title}
              text={text}
              features={features}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={7}>
          <Slider
            activeSlide={activeSlide}
            slides={slides.map(({ image }) => image)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export { DesktopSlider };
