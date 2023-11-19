import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import { Slide } from "../types";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";

interface ProgressProps {
  activeSlide: number;
  slidesNum: number;
}

const Progress = ({ activeSlide, slidesNum }: ProgressProps) => {
  return (
    <LinearProgress
      value={((activeSlide + 1) / slidesNum) * 100}
      variant="determinate"
      sx={{ position: "absolute", top: "50vh", width: "100%", zIndex: 1 }}
    />
  );
};

interface MobileSliderProps {
  slides: Slide[];
}

const MobileSlider = ({ slides }: MobileSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            style={{ position: "relative" }}
            onRealIndexChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "auto",
                }}
              >
                <Stack
                  spacing={2}
                  sx={{ backgroundColor: "background.default", height: "100%" }}
                >
                  <Box sx={{ position: "relative", height: "50vh" }}>
                    <Image
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={slide.image.src}
                      alt={slide.image.alt}
                    />
                  </Box>
                  <Box>
                    <Typography variant="overline">{slide.subtitle}</Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h3" gutterBottom>
                      {slide.title}
                    </Typography>
                    <Typography color="text.primary">{slide.text}</Typography>
                    {slide.features && (
                      <Grid container spacing={2} mt={2}>
                        {slide.features.map((feature) => (
                          <Grid item xs={6} key={`${index}-${feature.text}`}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              {feature.icon}
                              <Typography color="text.primary">
                                {feature.text}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </Box>
                </Stack>
              </SwiperSlide>
            ))}
            <Progress activeSlide={activeSlide} slidesNum={slides.length} />
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export { MobileSlider };
