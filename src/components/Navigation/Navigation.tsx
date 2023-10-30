"use client";
import * as React from "react";
import Link from "next/link";
import {
  styled,
  Toolbar,
  Typography,
  Button,
  AppBar,
  ButtonGroup,
  Stack,
  Divider,
  Link as MuiLink,
  alpha,
} from "@mui/material";
import { Language } from "./components";
import { Socials } from "../Socials";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})<{ isScrolled?: boolean }>(({ theme, isScrolled }) => {
  return {
    transition: theme.transitions.create(["background-color", "transform"]),
    backgroundColor: isScrolled
      ? "background.paper"
      : alpha(theme.palette.background.paper, 0.7),
    transform: isScrolled
      ? `translateY(-${theme.spacing(6)})`
      : "translateY(0)",
  };
});

const Navigation = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const updateIsScrolled = () => {
      const currentScrollYPosition = window.scrollY;

      if (currentScrollYPosition > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateIsScrolled);

    window.addEventListener("scroll", onScroll);
    updateIsScrolled();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledAppBar position="fixed" elevation={1} isScrolled={isScrolled}>
      <Toolbar variant="dense">
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Socials />
          <Divider flexItem orientation="vertical" />
          <Language />
        </Stack>
      </Toolbar>
      <Divider />
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <MuiLink href="/" component={Link} underline="none" color="white">
            <Typography variant="h6" component="h1" noWrap>
              LOGO
            </Typography>
          </MuiLink>
          <ButtonGroup
            variant="text"
            size="large"
            aria-label="text button group"
          >
            <Button sx={{ px: 3 }}>Oferta</Button>
            <Button sx={{ px: 3 }}>O nas</Button>
            <Button sx={{ px: 3 }}>Kontakt</Button>
          </ButtonGroup>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Navigation };
