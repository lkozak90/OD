import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { Email, Phone, WhatsApp } from "@mui/icons-material";
import { Heading } from "./Heading";
import { SlideIn } from "./SlideIn";

const ContactSection = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 20, overflow: "hidden" }}>
      <Heading
        title="Let's Connect"
        titleProps={{ variant: "h1", component: "h2" }}
        button={{
          text: "Contact Us",
        }}
      />
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} md={10} lg={5}>
          <SlideIn variant="left">
            <Typography variant="h6" component="p" fontWeight={300}>
              She packed her seven versalia, put her initial into the belt and
              made herself on the way. The Big Oxmox advised her not to do so,
              because there were thousands of bad Commas, wild Question Marks
              and devious Semikoli, but the Little Blind Text didn’t listen.
            </Typography>
          </SlideIn>
        </Grid>
        <Grid item xs={12} lg={5}>
          <SlideIn variant="right">
            <Stack spacing={2}>
              <Typography variant="h5" component="span">
                <MuiLink
                  component={Link}
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "auto",
                  }}
                >
                  <Email fontSize="small" /> osada-domkow@osada.com
                </MuiLink>
              </Typography>
              <Typography variant="h5" component="span">
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
              <Typography variant="h5" component="span">
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
          </SlideIn>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ContactSection };
