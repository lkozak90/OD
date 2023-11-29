"use client";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import { LocalTaxi, Man, MusicNote, OtherHouses } from "@mui/icons-material";
import React from "react";
import { SliderWithThumbs } from "./Sliders";
import { SlideIn } from "./SlideIn";
import { Bar } from "./Bar";
import { Heading } from "./Heading";
import { Tabs } from "./Tabs";
import { Accordions } from "./Accordions";
import { Alarm } from "@mui/icons-material";
import Image from "next/image";

const itemFeatures = [
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

const items = [
  {
    id: "1",
    title: "Features",
    content: (
      <Grid container spacing={3}>
        {itemFeatures.map(({ icon, text }) => (
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

const features = [
  {
    icon: <LocalTaxi color="primary" />,
    title: "Sleeps 10",
  },
  {
    icon: <Man color="primary" />,
    title: "Bedrooms 6",
  },
  {
    icon: <MusicNote color="primary" />,
    title: "Bathrooms 2",
  },
  {
    icon: <OtherHouses color="primary" />,
    title: "Size 100 m²",
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
                <Tabs items={items} />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Accordions items={items} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              width: "100%",
              p: { sm: 1 },
              maxWidth: { md: 400 },
              top: { md: 110 },
              marginTop: { xs: "-100px", md: "-200px" },
              position: { xs: "relative", md: "sticky" },
            }}
            variant="outlined"
          >
            <CardContent sx={{ "&:last-child": { pb: 2 } }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4">Dom 1</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    She had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    {features.map(({ icon, title }) => (
                      <Grid
                        key={title}
                        item
                        xs={6}
                        sm2={3}
                        md={6}
                        lg={3}
                        sx={{ textAlign: "center" }}
                      >
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    From{" "}
                    <Typography component="span" color="primary" variant="h6">
                      1500zł{" "}
                    </Typography>
                    / night
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" size="large">
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ReservationSection };
