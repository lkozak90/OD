"use client";
import { Grid, Typography, TypographyProps } from "@mui/material";
import { Bar } from "./Bar";
import { SlideIn } from "./SlideIn";

interface IntroProps {
  title: string;
  text?: string;
  variant?: TypographyProps["variant"];
}

const Intro = ({ title, text, variant = "h2" }: IntroProps) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8} xl={6}>
          <SlideIn variant="left">
            <Typography variant={variant} component="h2">
              {title}
            </Typography>
          </SlideIn>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item xs={12} lg={2}>
          <SlideIn variant="left">
            <Bar />
          </SlideIn>
        </Grid>
        {text && (
          <>
            <Grid item xs={1} />
            <Grid item xs={12} lg={6}>
              <SlideIn variant="right">
                <Typography variant="h6" component="p">
                  {text}
                </Typography>
              </SlideIn>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export { Intro };
