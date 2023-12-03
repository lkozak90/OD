import type { Metadata } from "next";
import { SimpleBanner, ContactSection } from "@/components";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Osada Domków | Kontakt",
  description: "Osada Domków w Kościelisku - kontakt",
};

export default function AboutPage() {
  return (
    <Box>
      <SimpleBanner title="Contact" />
      <ContactSection />
    </Box>
  );
}
