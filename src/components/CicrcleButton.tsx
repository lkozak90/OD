"use client";
import { Box, Button, ButtonProps } from "@mui/material";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import React, { useRef } from "react";

export interface CircleButtonProps {
  text: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  sx?: ButtonProps["sx"];
}

const CircleButton = ({
  text,
  variant = "outlined",
  color,
  sx,
}: CircleButtonProps) => {
  const touchRippleRef = useRef<TouchRippleActions>(null);

  return (
    <Button
      variant={variant}
      color={color}
      size="large"
      centerRipple
      disableTouchRipple
      sx={{
        width: 144,
        height: 144,
        borderRadius: "50%",
        padding: 0,
        borderWidth: 4,
        "&:hover": {
          borderWidth: 4,
        },
        ...sx,
      }}
      TouchRippleProps={{}}
      touchRippleRef={touchRippleRef}
      onMouseEnter={() => touchRippleRef.current?.start()}
      onMouseLeave={() => touchRippleRef.current?.stop()}
      onClick={() => {
        touchRippleRef.current?.stop();
        touchRippleRef.current?.start();
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
        component="span"
      >
        {text}
      </Box>
    </Button>
  );
};

export { CircleButton };
