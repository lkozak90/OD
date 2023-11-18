"use client";
import { Box } from "@mui/material";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type SlideInVariantes = "left" | "right" | "up" | "down" | "fadeIn";

const variants: Variants = {
  left: { x: 0, opacity: 1 },
  right: { x: 0, opacity: 1 },
  up: { y: 0, opacity: 1 },
  down: { y: 0, opacity: 1 },
  fadeIn: { opacity: 1 },
};

const variantInitialState = {
  left: { x: "-50%", opacity: 0 },
  right: { x: "50%", opacity: 0 },
  up: { y: "-50%", opacity: 0 },
  down: { y: "50%", opacity: 0 },
  fadeIn: { opacity: 0 },
};

interface SlideInProps {
  children: React.ReactNode;
  variant: SlideInVariantes;
}

const SlideIn = ({ children, variant }: SlideInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });

  return (
    <Box
      sx={{
        width: "100%",
      }}
      ref={ref}
    >
      <motion.div
        initial={variantInitialState[variant]}
        animate={isInView && variant}
        variants={variants}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export { SlideIn };
