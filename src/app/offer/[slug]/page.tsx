import type { Metadata } from "next";
import {
  ContactSection,
  Heading,
  SlideIn,
  OfferBanner,
  OfferCard,
  Gallery,
  ReservationSection,
  OffersNav,
} from "@/components";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Osada Domków | Dom 1",
  description: "Osada Domków w Kościelisku - Oferta domku 1",
};

export default function OfferPage() {
  return (
    <Box>
      <OfferBanner
        img={{ src: "/images/img3.jpg", alt: "img3 alt" }}
        title="Dom 1"
        text="She packed her seven versalia, put her initial into the belt and
        made herself on the way."
      />
      <ReservationSection />
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
          <Heading title="Other Houses" />
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
              <OfferCard />
            </Grid>
            <Grid item>
              <OfferCard />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="xl" sx={{ my: 20, overflow: "hidden" }}>
        <Gallery />
      </Container>
      <OffersNav />
      <ContactSection />
    </Box>
  );
}
