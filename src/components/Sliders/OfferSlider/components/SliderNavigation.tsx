"use client";
import { useSwiper } from "swiper/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

interface SliderNavigationProps {
  activeSlide: number;
  slidesNum: number;
}

const SliderNavigation = ({
  activeSlide,
  slidesNum,
}: SliderNavigationProps) => {
  const swiper = useSwiper();

  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "calc(50% + 30px)", lg: "calc(60% + 40px)" },
        position: "absolute",
        bottom: { xs: 12, md: 0 },
        zIndex: 1,
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <IconButton onClick={() => swiper.slidePrev()}>
          <ArrowBackIosNew
            sx={{
              left: -2,
              position: "relative",
              fontSize: { md: "2.1875rem" },
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          border: "2px solid",
          borderColor: "text.primary",
        }}
      >
        <Typography variant="caption">
          {activeSlide + 1} / {slidesNum}
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => swiper.slideNext()}
          sx={{ flexShrink: 0, right: "0.5vw" }}
        >
          <ArrowForwardIos
            sx={{
              right: -2,
              position: "relative",
              fontSize: { md: "2.1875rem" },
            }}
          />
        </IconButton>
      </Box>
    </Stack>
  );
};

export { SliderNavigation };
