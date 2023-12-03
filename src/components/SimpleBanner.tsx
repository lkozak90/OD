import { Box, Stack, Typography } from "@mui/material";

interface BannerProps {
  title: string;
  text?: string;
}

const SimpleBanner = ({ title, text }: BannerProps) => {
  return (
    <Box
      sx={{
        height: "30vh",
        pt: 10,
        minHeight: 600,
        width: "100vw",
        position: "relative",
        backgroundColor: "secondary.main",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", position: "relative" }}
      >
        <Stack
          zIndex={1}
          alignItems="center"
          sx={{ p: 4, textAlign: "center" }}
        >
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>
          {text && (
            <Typography variant="h5" component="p">
              {text}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { SimpleBanner };
