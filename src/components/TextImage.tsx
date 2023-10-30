import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const TextImage = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <Typography variant="h4">The Big Oxmox</Typography>
          <Typography variant="body1">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <Image
          width={600}
          height={0}
          style={{ width: "100%", height: "auto" }}
          src="/images/img1.jpg"
          alt="img1 alt"
        />
      </Grid>
    </Grid>
  );
};

export { TextImage };
