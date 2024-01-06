import type { Metadata } from "next";
import {
  Intro,
  ContactSection,
  Heading,
  SlideIn,
  Banner,
  OfferSlider,
  OfferCard,
  Gallery,
} from "@/components";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Osada Domków | Oferta",
  description: "Osada Domków w Kościelisku - Oferta",
};

export default function OfferPage() {
  return (
    <Box>
      <Banner
        title="Offer"
        img={{ src: "/images/img3.jpg", alt: "img3 alt" }}
      />
      <Container maxWidth="xl" sx={{ my: 20, overflow: "hidden" }}>
        <Intro
          variant="h1"
          title="She packed her seven versalia"
          text="She packed her seven versalia, put her initial into the belt and
              made herself on the way. When she reached the first hills of the
              Italic Mountains, she had a last view back on the skyline of her
              hometown Bookmarksgrove, the headline of Alphabet Village and the
              subline of her own road, the Line Lane."
        />
      </Container>
      <Container maxWidth="xl" sx={{ my: 20, overflow: "hidden" }}>
        <OfferSlider />
      </Container>
      <Paper
        elevation={1}
        sx={{
          mt: 20,
          mb: 10,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ my: 10 }}>
          <Heading title="Our Houses" />
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={7}>
              <SlideIn variant="left">
                <Typography variant="h6" component="p" fontWeight={300}>
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way. When she reached the first hills
                  of the Italic Mountains, she had a last view back on the
                  skyline of her hometown Bookmarksgrove, the headline of
                  Alphabet Village and the subline of her own road, the Line
                  Lane.
                </Typography>
              </SlideIn>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false} sx={{ mb: 15, maxWidth: 2560 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <OfferCard id="offers-house-1" />
            </Grid>
            <Grid item>
              <OfferCard id="offers-house-2" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="xl" sx={{ my: 20, overflow: "hidden" }}>
        <Gallery />
      </Container>
      <ContactSection />
    </Box>
  );
}
