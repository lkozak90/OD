import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface BannerProps {
  img: { src: string; alt: string };
  title: string;
  text?: string;
}

const Banner = ({ img, title, text }: BannerProps) => {
  return (
    <Box sx={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", position: "relative" }}
      >
        <Image
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
          }}
          src={img.src}
          alt={img.alt}
        />
        <Stack
          zIndex={1}
          alignItems="center"
          sx={{ p: 4, textAlign: "center" }}
        >
          <Typography variant="h1">{title}</Typography>
          {text && (
            <Typography variant="h2" component="p">
              {text}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { Banner };
