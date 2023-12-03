"use client";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingTop: 50,
  paddingBottom: 50,
}));

const StyledCircle = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  border: "4px solid",
  borderColor: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const StyledNavItem = styled(Stack)(({ theme }) => ({
  textDecoration: "none",

  "& svg": {
    transition: theme.transitions.create(["transform"]),
  },
})) as typeof Stack;

const OffersNav = () => {
  return (
    <StyledBox>
      <Container>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction={{ xs: "column", sm2: "row" }}
          spacing={3}
        >
          <StyledNavItem
            component={Link}
            href="/offer/dom-5"
            direction="row"
            alignItems="center"
            sx={{
              "&:hover": {
                "& svg": {
                  transform: "translateX(-10px)",
                },
              },
            }}
          >
            <ArrowBackIosNew
              color="action"
              sx={{
                display: { xs: "none", sm2: "block" },
                width: { sm: 40, md: 60 },
                height: { sm: 40, md: 60 },
                mr: 2,
              }}
            />
            <Typography variant="h3" color="textPrimary">
              Dom 5
            </Typography>
          </StyledNavItem>
          <StyledCircle>
            <Typography>1/5</Typography>
          </StyledCircle>
          <StyledNavItem
            component={Link}
            href="/offer/dom-3"
            direction="row"
            alignItems="center"
            sx={{
              "&:hover": {
                "& svg": {
                  transform: "translateX(10px)",
                },
              },
            }}
          >
            <Typography variant="h3" color="textPrimary">
              Dom 3
            </Typography>
            <ArrowForwardIos
              color="action"
              sx={{
                display: { xs: "none", sm2: "block" },
                width: { sm: 40, md: 60 },
                height: { sm: 40, md: 60 },
                ml: 2,
              }}
            />
          </StyledNavItem>
        </Stack>
      </Container>
    </StyledBox>
  );
};

export { OffersNav };
