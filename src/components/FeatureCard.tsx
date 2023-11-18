"use client";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { SlideIn } from "./SlideIn";

const StyledCard = styled(Card)(({ theme }) => ({
  pt: 1,
  height: "100%",
  transition: theme.transitions.create(["color"]),
  "&:hover": {
    color: theme.palette.primary.main,
    "& hr": {
      borderColor: "inherit",
    },
  },
  "& hr": {
    borderColor: theme.palette.secondary.main,
    transition: theme.transitions.create(["border-color"]),
  },
}));

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => {
  return (
    <SlideIn variant="down">
      <StyledCard elevation={0}>
        <Box
          sx={{
            p: 2,
            pb: 1,
            display: "flex",
            "& svg": {
              width: 60,
              height: 60,
            },
          }}
        >
          {icon}
        </Box>
        <Box sx={{ pt: 2, pb: 1 }}>
          <Divider />
        </Box>
        <CardHeader
          title={title}
          sx={{ px: 0 }}
          titleTypographyProps={{ variant: "h3", component: "h3" }}
        />
        <CardContent sx={{ px: 0, pt: 0 }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "normal" }}
            color="text.primary"
          >
            {content}
          </Typography>
        </CardContent>
      </StyledCard>
    </SlideIn>
  );
};

export { FeatureCard };
