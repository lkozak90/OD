"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button } from "@mui/material";
import { SliderNavigation, Slide } from "./components";

export const FullViewSlider = () => {
  return (
    <Box sx={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
        <SwiperSlide>
          <Slide
            img={{ src: "/images/img1.jpg", alt: "img1 alt" }}
            title="Osada Domków"
            text="Kościelisko"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={{ src: "/images/img2.jpg", alt: "img2 alt" }}
            title="Super tytuł"
            text="Wspaniały opis"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={{ src: "/images/img3.jpg", alt: "img3 alt" }}
            title="Niesamowity tytuł"
            text="Zachęcający opis"
          />
        </SwiperSlide>
        <SliderNavigation />
      </Swiper>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Zarezerwuj
      </Button>
    </Box>
  );
};
