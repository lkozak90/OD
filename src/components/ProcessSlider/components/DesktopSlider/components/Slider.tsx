"use client";
import { Box } from "@mui/material";
import { useScroll, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { EffectFade } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  activeSlide: number;
  slides: {
    src: string;
    alt: string;
  }[];
}

const Slider = ({ activeSlide, slides }: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-64px", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && !isFixed) {
      setIsFixed(true);
    } else if (value === 0) {
      setIsFixed(false);
    }
  });

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);

  return (
    <Box sx={{ height: "100%", position: "relative" }} ref={ref}>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          top: isFixed ? 64 : 0,
          width: "100%",
          position: isFixed ? "sticky" : "absolute",
        }}
      >
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          style={{ height: "100%" }}
          onSwiper={setSwiper}
          initialSlide={activeSlide}
          allowTouchMove={false}
        >
          {slides.map(({ src, alt }, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ position: "relative", height: "100%" }}>
                <Image
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={src}
                  alt={alt}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export { Slider };
