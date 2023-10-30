import { Card, CardHeader, CardContent, Box } from "@mui/material";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => {
  return (
    <Card sx={{ textAlign: "center", pt: 1, height: "100%" }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>{icon}</Box>
      <CardHeader title={title} />
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export { FeatureCard };
