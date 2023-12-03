import type { Metadata } from "next";
import {
  SimpleBanner,
  ContactSection,
  TextImageColumns,
  Intro,
} from "@/components";
import { Container, Box, Paper } from "@mui/material";

export const metadata: Metadata = {
  title: "Osada Domków | O Nas",
  description: "Osada Domków w Kościelisku - o nas",
};

export default function AboutPage() {
  return (
    <Box>
      <SimpleBanner title="About us" />
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
        <Container
          maxWidth="xl"
          sx={{
            my: 20,
            overflow: "hidden",
          }}
        >
          <TextImageColumns
            title="Hello"
            text="She packed her seven versalia, put her initial into the belt and made herself on the way. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."
            img={{ src: "/images/img3.jpg", alt: "img3 alt" }}
            orientation="left"
          />
        </Container>
      </Paper>
      <ContactSection />
    </Box>
  );
}
