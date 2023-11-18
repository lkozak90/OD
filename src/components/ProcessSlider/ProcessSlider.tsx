"use client";
import { DesktopSlider, MobileSlider } from "./components";
import { EmojiEvents } from "@mui/icons-material";

const slides = [
  {
    subtitle: "Subtitle 1",
    title: "Slide 1",
    text: "She packed her seven versalia, put her initial into the belt and made herself on the way.",
    image: {
      src: "/images/img1.jpg",
      alt: "img 1",
    },
    features: [
      {
        icon: <EmojiEvents fontSize="small" />,
        text: "Feature 1",
      },
      {
        icon: <EmojiEvents fontSize="small" />,
        text: "Feature 2",
      },
      {
        icon: <EmojiEvents fontSize="small" />,
        text: "Feature 3",
      },
    ],
  },
  {
    subtitle: "Subtitle 2",
    title: "Slide 2",
    text: " She packed her seven versalia, put her initial into the belt and made herself on the way. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
    image: {
      src: "/images/img2.jpg",
      alt: "img 2",
    },
  },
  {
    subtitle: "Subtitle 3",
    title: "Slide 3",
    text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
    image: {
      src: "/images/img3.jpg",
      alt: "img 3",
    },
  },
];

const ProcessSlider = () => {
  return (
    <>
      <DesktopSlider slides={slides} />
      <MobileSlider slides={slides} />
    </>
  );
};

export { ProcessSlider };
