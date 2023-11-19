"use client";
import { Box, Card } from "@mui/material";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade, Controller } from "swiper/modules";
import { useState } from "react";
import { Content, SliderNavigation } from "./components";

const slides = [
  {
    img: {
      src: "/images/img1.jpg",
      alt: "img 1",
    },
    title: "Slide 1",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    img: {
      src: "/images/img2.jpg",
      alt: "img 2",
    },
    title: "Slide 2",
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: {
      src: "/images/img3.jpg",
      alt: "img 3",
    },
    title: "Slide 3",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const OfferSlider = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: { xs: "60%", md: "100%" },
          width: "100%",
          pr: { md: 8 },
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          modules={[Controller]}
          controller={{ control: controlledSwiper }}
          style={{ height: "100%", width: "100%" }}
          onRealIndexChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
        >
          {slides.map(({ img: { src, alt } }) => (
            <SwiperSlide key={src} style={{ height: "calc(100% - 64px)" }}>
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
          <SliderNavigation
            activeSlide={activeSlide}
            slidesNum={slides.length}
          />
        </Swiper>
      </Box>
      <Card
        variant="outlined"
        sx={{
          position: "absolute",
          bottom: 0,
          height: "30%",
          minHeight: 300,
          width: { xs: "100%", md: "50%", lg: "40%" },
          right: 0,
          zIndex: 1,
        }}
      >
        <Swiper
          modules={[EffectFade, Controller]}
          effect="fade"
          loop
          allowTouchMove={false}
          onSwiper={setControlledSwiper}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {slides.map(({ title, text }) => (
            <SwiperSlide key={title}>
              <Content title={title} text={text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Box>
  );
};

export { OfferSlider };
