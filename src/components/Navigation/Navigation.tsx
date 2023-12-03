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
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { Language } from "./components";
import { Socials } from "../Socials";
import { Menu } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
  { label: "Offer", href: "/offer" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  const drawer = (
    <Box sx={{ textAlign: "center" }} onClick={handleDrawerToggle}>
      <MuiLink
        href="/"
        component={Link}
        underline="none"
        color="white"
        sx={{ my: 2, display: "inline-block" }}
      >
        <Typography variant="h6" component="span">
          LOGO
        </Typography>
      </MuiLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              LinkComponent={Link}
              href={item.href}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
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
              <Typography variant="h6" component="span" noWrap>
                LOGO
              </Typography>
            </MuiLink>
            <ButtonGroup
              variant="text"
              size="large"
              aria-label="text button group"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{ px: 3 }}
                  LinkComponent={Link}
                  href={item.href}
                >
                  {item.label}
                </Button>
              ))}
            </ButtonGroup>
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <Menu />
            </IconButton>
          </Stack>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export { Navigation };
