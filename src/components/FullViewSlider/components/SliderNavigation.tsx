"use client";
import { useSwiper } from "swiper/react";
import { IconButton, styled } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
});

export const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <StyledIconButton
        onClick={() => swiper.slidePrev()}
        sx={{ left: "0.5vw" }}
      >
        <ArrowBackIosNew
          fontSize="large"
          sx={{ left: -2, position: "relative" }}
        />
      </StyledIconButton>
      <StyledIconButton
        onClick={() => swiper.slideNext()}
        sx={{ right: "0.5vw" }}
      >
        <ArrowForwardIos
          fontSize="large"
          sx={{ right: -2, position: "relative" }}
        />
      </StyledIconButton>
    </>
  );
};
