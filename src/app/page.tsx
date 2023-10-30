import type { Metadata } from "next";
import { FullViewSlider, FeatureCard, TextImage } from "@/components";
import { Container, Box, Grid } from "@mui/material";
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
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<SelfImprovement fontSize="large" />}
              title="Far far away"
              content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Pets fontSize="large" />}
              title="Alphabet Village"
              content="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Accessible fontSize="large" />}
              title="Question Marks"
              content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard
              icon={<Landscape fontSize="large" />}
              title="Little Blind Text"
              content="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <TextImage />
      </Container>
    </Box>
  );
}
