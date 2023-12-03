"use client";
import { useEffect, useState } from "react";
import { Cookie } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Fade,
  Grid,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const setCookie = (cname: string, cvalue: any, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};`;
};

const getCookie = (cname: string) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const Cookies = () => {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    setCookie("cookies_consent_accepted", true, 360);
    setOpen(false);
  };

  useEffect(() => {
    const cookiesAccepted = getCookie("cookies_consent_accepted");
    if (!cookiesAccepted) {
      setOpen(true);
    }
  }, []);

  return (
    <Fade appear={false} in={open}>
      <AppBar
        position="fixed"
        elevation={6}
        color="inherit"
        sx={(theme) => ({
          top: "auto",
          bottom: 0,
          zIndex: theme.zIndex.appBar + 1,
        })}
      >
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                <Cookie
                  sx={(theme) => ({ fontSize: theme.spacing(8) })}
                  color="primary"
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h6">Ta stona używa ciasteczek</Typography>
                <Typography>
                  Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
                  użycie.
                  <MuiLink
                    component={Link}
                    href="/privacy-policy"
                    sx={{ ml: 1 }}
                  >
                    Polityka prywatności
                  </MuiLink>
                </Typography>
              </Grid>
              <Grid item xs={12} md="auto">
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Grid item md={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleAccept}
                    >
                      Zgoda
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

export { Cookies };
