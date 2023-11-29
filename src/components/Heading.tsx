"use client";
import { Box, Grid, Stack, Typography, TypographyProps } from "@mui/material";
import { Bar } from "./Bar";
import { CircleButton, CircleButtonProps } from "./CicrcleButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SlideIn } from "./SlideIn";

const ResponsiveButton = ({ button }: { button: CircleButtonProps }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 64, md: 144 },
        height: { xs: 64, md: 144 },
        my: -9,
        flexShrink: 0,
      }}
    >
      <SlideIn variant="fadeIn">
        <CircleButton
          color="secondary"
          sx={{
            position: "absolute",
            right: 0,
            borderColor: "secondary.main",
            color: "white",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            zIndex: 1,
            "& .MuiTouchRipple-root": {
              color: "secondary.main",
            },
          }}
          {...button}
          text={
            <>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                {button.text}
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  lineHeight: 1,
                }}
              >
                <ChevronRightIcon fontSize="large" />
              </Box>
            </>
          }
        />
      </SlideIn>
    </Box>
  );
};

interface HeadingProps {
  title: string;
  titleProps?: TypographyProps;
  button?: CircleButtonProps;
  fullWidthTitle?: boolean;
}

const Heading = ({
  title,
  titleProps,
  button,
  fullWidthTitle,
}: HeadingProps) => {
  return (
    <Grid container spacing={3} mb={4}>
      <Grid item xs={fullWidthTitle ? 12 : 10} lg={fullWidthTitle ? 12 : 6}>
        <SlideIn variant="down">
          <Typography variant="h2" {...titleProps}>
            {title}
          </Typography>
        </SlideIn>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center">
          <SlideIn variant="fadeIn">
            <Bar />
          </SlideIn>
          {button && <ResponsiveButton button={button} />}
        </Stack>
      </Grid>
    </Grid>
  );
};

export { Heading };
