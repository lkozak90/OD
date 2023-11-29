"use client";
import { Box, Stack, styled } from "@mui/material";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Thumbs, FreeMode } from "swiper/modules";
import { useState } from "react";
import { SliderNavigation } from "../components";

const slides = [
  {
    src: "/images/img1.jpg",
    alt: "img 1",
  },
  {
    src: "/images/img2.jpg",
    alt: "img 2",
  },
  {
    src: "/images/img3.jpg",
    alt: "img 3",
  },
  {
    src: "/images/img1.jpg",
    alt: "img 11",
  },
  {
    src: "/images/img2.jpg",
    alt: "img 21",
  },
  {
    src: "/images/img3.jpg",
    alt: "img 31",
  },
  {
    src: "/images/img1.jpg",
    alt: "img 12",
  },
  {
    src: "/images/img2.jpg",
    alt: "img 22",
  },
  {
    src: "/images/img3.jpg",
    alt: "img 32",
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
  height: "15vh",
  width: "100%",
  "& img": {
    opacity: 0.5,
    transition: theme.transitions.create(["opacity"]),
    "&:hover": {
      opacity: 0.8,
    },
  },
  "& .swiper-slide-thumb-active img": {
    opacity: 1,
  },
  [theme.breakpoints.up("md")]: {
    height: 160,
  },
}));

const SliderWithThumbs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Stack spacing={1}>
      <Box
        sx={{
          height: { xs: "60vh", md: 660 },
          width: "100%",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "100%", width: "100%" }}
        >
          {slides.map(({ src, alt }) => (
            <SwiperSlide key={`${src}-${alt}-main`}>
              <Image
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={src}
                alt={alt}
              />
            </SwiperSlide>
          ))}
          <SliderNavigation />
        </Swiper>
      </Box>

      <StyledBox>
        <Swiper
          modules={[Thumbs, FreeMode]}
          freeMode
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={5}
          grabCursor
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {slides.map(({ src, alt }) => (
            <SwiperSlide key={`${src}-${alt}-thumb`}>
              <Image
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={src}
                alt={alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledBox>
    </Stack>
  );
};

export { SliderWithThumbs };
