"use client";
import { Box, Divider, Grid, Stack, Typography, styled } from "@mui/material";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Dispatch, SetStateAction, useMemo, useRef } from "react";

const StyledBox = styled(Box, {
  shouldForwardProp: (props) => props !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  transition: theme.transitions.create(["color"]),
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  "& hr": {
    borderColor: isActive
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    transition: theme.transitions.create(["border-color"]),
  },
}));

interface SlideTextProps {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
  activeSlide: number;
  setActiveSlide: Dispatch<SetStateAction<number>>;
}

const SlideText = ({
  id,
  subtitle,
  title,
  text,
  features,
  activeSlide,
  setActiveSlide,
}: SlideTextProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < 1 && activeSlide !== id) {
      setActiveSlide(id);
    }
  });

  const isActive = useMemo(() => activeSlide === id, [activeSlide, id]);

  return (
    <StyledBox ref={ref} isActive={isActive}>
      <Typography variant="overline">{subtitle}</Typography>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.primary">{text}</Typography>
      {features && (
        <Grid container spacing={2} mt={2}>
          {features.map((feature) => (
            <Grid item xs={6} key={`${id}-${feature.text}`}>
              <Stack direction="row" spacing={1} alignItems="center">
                {feature.icon}
                <Typography color="text.primary">{feature.text}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </StyledBox>
  );
};

export { SlideText };
