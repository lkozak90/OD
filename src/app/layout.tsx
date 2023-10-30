import * as React from "react";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { Box } from "@mui/material";
import { Navigation, Footer } from "@/components";
import "swiper/css";
import "swiper/css/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navigation />
          <Box component="main">{children}</Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
