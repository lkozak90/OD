import {
  Paper,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Socials } from "../Socials";
import { Email, Phone, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 10 }}>
      <Divider />
      <Paper sx={{ display: "flex", flexDirection: "column" }} elevation={1}>
        <Container maxWidth="xl" sx={{ my: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h5">LOGO</Typography>
                <Typography variant="body2">
                  Osada Domków <br />
                  Kościelisko 123
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h5">Skontaktuj się z nami</Typography>
                <Typography variant="body2">
                  <MuiLink
                    component={Link}
                    href="/"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Email fontSize="small" /> osada-domkow@osada.com
                  </MuiLink>
                </Typography>
                <Typography variant="body2">
                  <MuiLink
                    component={Link}
                    href="/"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Phone fontSize="small" /> +48 123 123 123
                  </MuiLink>
                </Typography>
                <Typography variant="body2">
                  <MuiLink
                    component={Link}
                    href="/"
                    color="inherit"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <WhatsApp fontSize="small" /> m.me/123123123
                  </MuiLink>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ display: "flex", flexDirection: "column" }} elevation={1}>
        <Divider />
        <Container maxWidth="xl" sx={{ my: 2 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Socials />
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2">
                  <MuiLink
                    component={Link}
                    href="/"
                    color="inherit"
                    underline="hover"
                  >
                    Polityka prytatności
                  </MuiLink>
                </Typography>
                <Typography variant="body2">
                  <MuiLink
                    component={Link}
                    href="/"
                    color="inherit"
                    underline="hover"
                  >
                    Ustawienia cookies
                  </MuiLink>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

export { Footer };
