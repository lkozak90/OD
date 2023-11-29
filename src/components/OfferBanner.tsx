import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface BannerProps {
  img: { src: string; alt: string };
  title: string;
  text?: string;
}

const OfferBanner = ({ img, title, text }: BannerProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: 700,
        width: "100vw",
        position: "relative",
      }}
    >
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
        <Stack zIndex={1} alignItems="center" width="100%" sx={{ pt: 10 }}>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" gutterBottom>
                  {title}
                </Typography>
                {text && (
                  <Typography variant="h5" component="h2">
                    {text}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Stack>
    </Box>
  );
};

export { OfferBanner };
