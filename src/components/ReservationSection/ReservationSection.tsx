"use client";
import { Container, Grid, Typography, Box, Stack } from "@mui/material";
import { Alarm } from "@mui/icons-material";
import React from "react";
import { SliderWithThumbs } from "@/components/Sliders";
import { SlideIn } from "@/components/SlideIn";
import { Bar } from "@/components/Bar";
import { Heading } from "@/components/Heading";
import { Tabs } from "@/components/Tabs";
import { Accordions } from "@/components/Accordions";
import Image from "next/image";
import { BookNowCard } from "./components";

const features = [
  {
    icon: <Alarm color="primary" />,
    text: "Feature 1 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 2 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 3 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 4 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 5 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 6 label",
  },
  {
    icon: <Alarm color="primary" />,
    text: "Feature 7 label",
  },
];

const tabs = [
  {
    id: "1",
    title: "Features",
    content: (
      <Grid container spacing={3}>
        {features.map(({ icon, text }) => (
          <Grid key={text} item xs={12} sm2={6} sm={4} md={6} lg={4}>
            <Stack spacing={1} alignItems="center" direction="row">
              {icon}
              <Typography>{text}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    ),
  },
  {
    id: "2",
    title: "Payment methods",
    content: (
      <Stack spacing={2} direction="row">
        <Image width={50} height={16} src="/icons/visa.svg" alt="Visa Logo" />
        <Image width={50} height={16} src="/icons/visa.svg" alt="Visa Logo" />
      </Stack>
    ),
  },
  {
    id: "3",
    title: "Parking",
    content: (
      <Typography>
        The headline of Alphabet Village and the subline of her own road.
      </Typography>
    ),
  },
  {
    id: "4",
    title: "Animals",
    content: (
      <Typography>
        She had a last view back on the skyline of her hometown Bookmarksgrove,
        the headline of Alphabet Village and the subline of her own road, the
        Line Lane.
      </Typography>
    ),
  },
];

const ReservationSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={3}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={3} sx={{ my: 10, overflow: "hidden" }}>
            <Grid item xs={12}>
              <SlideIn variant="down">
                <Typography variant="h2">Basic Informations</Typography>
              </SlideIn>
            </Grid>
            <Grid item xs={12} lg={3}>
              <SlideIn variant="down">
                <Bar />
              </SlideIn>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12} lg={8}>
              <SlideIn variant="down">
                <Typography variant="h6" component="p">
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way. When she reached the first hills
                  of the Italic Mountains, she had a last view back on the
                  skyline of her hometown Bookmarksgrove, the headline of
                  Alphabet Village and the subline of her own road, the Line
                  Lane.
                </Typography>
              </SlideIn>
            </Grid>
            <Grid item xs={12} sx={{ my: 10 }}>
              <SliderWithThumbs />
            </Grid>
            <Grid item xs={12}>
              <Heading title="Detailed Informations" fullWidthTitle />
              <Typography gutterBottom>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way. When she reached the first hills of the
                Italic Mountains, she had a last view back on the skyline of her
                hometown Bookmarksgrove, the headline of Alphabet Village and
                the subline of her own road, the Line Lane.
              </Typography>
              <Typography gutterBottom>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way. When she reached the first hills of the
                Italic Mountains, she had a last view back on the skyline of her
                hometown Bookmarksgrove, the headline of Alphabet Village and
                the subline of her own road, the Line Lane.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 10 }}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Tabs items={tabs} />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Accordions items={tabs} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <BookNowCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export { ReservationSection };
