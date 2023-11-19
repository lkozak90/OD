import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

interface ContentProps {
  title: string;
  text: string;
}

const Content = ({ title, text }: ContentProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "background.default",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          boxSizing: "border-box",
          "&:last-child": { pb: 2 },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ height: "calc(100% + 16px)" }}
          alignItems="start"
        >
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="h4">{title}</Typography>
              <Divider sx={{ width: "100%" }} />
              <Typography>{text}</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            alignSelf="end"
            sx={{ textAlign: "right", mt: "auto" }}
          >
            <Button variant="outlined">Reservation</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
};

export { Content };
