"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { Slide } from "./components";
import { SliderNavigation } from "../components";
import { CircleButton } from "../../CicrcleButton";

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
            primary
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
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <CircleButton text="Check Availability" />
      </Box>
    </Box>
  );
};
