"use client";
import * as React from "react";
import {
  Dialog,
  ImageList,
  ImageListItem,
  Card,
  CardActionArea,
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNavigation } from "./Sliders/components";
import { Fullscreen } from "@mui/icons-material";

const images = [
  {
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    alt: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    alt: "Burger",
  },
  {
    src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    alt: "Camera",
  },
  {
    src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    alt: "Coffee",
    cols: 2,
  },
];

const Gallery = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [initialSlide, setInitialSlide] = React.useState(0);

  return (
    <>
      <ImageList
        sx={{
          width: "100%",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr) !important",
            sm: "repeat(4, 1fr) !important",
          },
        }}
        variant="quilted"
        cols={4}
      >
        {images.map((img, index) => (
          <ImageListItem
            key={img.src}
            cols={img.cols || 1}
            rows={img.rows || 1}
          >
            <Card>
              <CardActionArea
                sx={(theme) => ({
                  position: "relative",
                  paddingBottom: `${
                    100 / ((img.cols ?? 1) / (img.rows ?? 1))
                  }%`,
                  overflow: "hidden",

                  "&:hover": {
                    "& img": {
                      transform: "scale(1.02)",
                    },
                    "& svg": {
                      opacity: 1,
                    },
                  },
                  "& img": {
                    transition: theme.transitions.create(["transform"]),
                  },
                  "& svg": {
                    opacity: 0,
                    transition: theme.transitions.create(["opacity"]),
                  },
                })}
                onClick={() => {
                  setInitialSlide(index);
                  setOpenDialog(true);
                }}
              >
                <Image
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={img.src}
                  alt={img.alt}
                />
                <Fullscreen
                  color="secondary"
                  sx={{
                    width: 80,
                    height: 80,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </CardActionArea>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        maxWidth="xl"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "transparent",
            textAlign: "center",
          },
        }}
      >
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={0}
          style={{ width: "100%" }}
          initialSlide={initialSlide}
        >
          {images.map((img) => (
            <SwiperSlide key={img.src} style={{ width: "auto" }}>
              <Image
                width={1000}
                height={500}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                }}
                src={img.src}
                alt={img.alt}
              />
            </SwiperSlide>
          ))}
          <SliderNavigation />
        </Swiper>
      </Dialog>
    </>
  );
};

export { Gallery };
