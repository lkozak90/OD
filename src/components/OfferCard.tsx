"use client";
import {
  styled,
  Card,
  Box,
  Typography,
  Stack,
  CardActionArea,
  Button,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { AttachMoney, SquareFoot, Shower } from "@mui/icons-material";
import { useCallback } from "react";

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  height: "100%",
  display: "flex",
  "&:hover": {
    "& > img": {
      transform: "scale(1.02)",
    },
  },
  "& > img": {
    transition: theme.transitions.create(["transform"]),
  },
})) as typeof CardActionArea;

const features = [
  {
    icon: <SquareFoot fontSize="small" color="primary" />,
    text: "100 m²",
  },
  {
    icon: <Shower fontSize="small" color="primary" />,
    text: "2 łazienki",
  },
  {
    icon: <AttachMoney fontSize="small" color="primary" />,
    text: "1500 zł/noc",
  },
];

const OfferCard = () => {
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <Card
      sx={{
        borderRadius: 0,
        height: "80vh",
        position: "relative",
        maxWidth: 500,
      }}
    >
      <StyledCardActionArea component="div">
        <Image
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="/images/img2.jpg"
          alt="img1"
        />
        <Box
          sx={{
            position: "relative",
            mt: "auto",
            width: "100%",
            p: 3,
            backgroundColor: "rgba(0, 0, 0, .4)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" mb={2}>
                Dom 1
              </Typography>
              {features.map(({ icon, text }) => (
                <Stack key={text} direction="row" spacing={1} mb={1}>
                  {icon}
                  <Typography variant="body1">{text}</Typography>
                </Stack>
              ))}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                onMouseDown={handleMouseDown}
              >
                Zobacz
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onMouseDown={handleMouseDown}
              >
                Zarezerwuj
              </Button>
            </Grid>
          </Grid>
        </Box>
      </StyledCardActionArea>
    </Card>
  );
};

export { OfferCard };
