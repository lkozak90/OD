import type { Metadata } from "next";
import {
  FullViewSlider,
  FeatureCard,
  Intro,
  TextImageSection,
  OfferCard,
  ProcessSlider,
  ContactSection,
  Heading,
  SlideIn,
  Reservation,
} from "@/components";
import { Container, Box, Grid, Button, Paper, Typography } from "@mui/material";
import {
  SelfImprovement,
  Pets,
  Accessible,
  Landscape,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Osada Domków",
  description: "Osada Domków w Kościelisku",
};

export default function HomePage() {
  return (
    <Box>
      <FullViewSlider />
      <Reservation />
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<SelfImprovement />}
              title="Far far far away"
              content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Pets />}
              title="Alphabet Village"
              content="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Accessible />}
              title="Question Marks"
              content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Landscape />}
              title="Little Blind Text"
              content="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
          </Grid>
        </Grid>
      </Container>
      <TextImageSection
        title="The Big Oxmox"
        text=" The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way. The Big Oxmox advised her not to do so,
                because there were thousands of bad Commas, wild Question Marks
                and devious Semikoli, but the Little Blind Text didn’t listen.
                She packed her seven versalia, put her initial into the belt and
                made herself on the way."
        button={<Button>Read more</Button>}
        image={{ src: "/images/img1.jpg", alt: "img1 alt" }}
        orientation="left"
      />
      <TextImageSection
        title="The Big Oxmox"
        text="The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way. The Big Oxmox advised her not to do so,
                because there were thousands of bad Commas, wild Question Marks
                and devious Semikoli, but the Little Blind Text didn’t listen.
                She packed her seven versalia, put her initial into the belt and
                made herself on the way."
        button={<Button>Read more</Button>}
        image={{ src: "/images/img2.jpg", alt: "img2 alt" }}
        orientation="right"
      />
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
          <Heading
            title="Our Houses"
            button={{
              text: "Check Houses",
              href: "/offer",
            }}
          />
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
      <Container maxWidth="xl" sx={{ my: 10, overflow: "hidden" }}>
        <Heading title="Another Section" />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}></Grid>
          <Grid item xs={12} lg={7}>
            <SlideIn variant="right">
              <Typography variant="h6" component="p" fontWeight={300}>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way. When she reached the first hills of the
                Italic Mountains, she had a last view back on the skyline of her
                hometown Bookmarksgrove, the headline of Alphabet Village and
                the subline of her own road, the Line Lane.
              </Typography>
            </SlideIn>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <ProcessSlider />
      </Container>
      <ContactSection />
    </Box>
  );
}
