import Link from "next/link";
import { IconButton, Stack } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";

const Socials = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton size="small" component={Link} href="/">
        <Instagram fontSize="small" />
      </IconButton>
      <IconButton size="small" component={Link} href="/">
        <Facebook fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export { Socials };
