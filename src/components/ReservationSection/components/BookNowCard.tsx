"use client";
import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import { LocalTaxi, Man, MusicNote, OtherHouses } from "@mui/icons-material";
import React from "react";
import { BookNow } from "@/components/BookNow";

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

const BookNowCard = () => {
  return (
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
              Bookmarksgrove, the headline of Alphabet Village and the subline
              of her own road, the Line Lane
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
            <BookNow id="house-1" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { BookNowCard };
