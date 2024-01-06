"use client";
import { Button, Dialog, DialogActions } from "@mui/material";
import { useCallback, useState } from "react";
import Script from "next/script";

interface BookNowProps {
  id: string;
}

const BookNow = ({ id }: BookNowProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen(true);
  }, []);

  const handleClose = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen(false);
  }, []);

  return (
    <>
      <Script>{`(function (w, d, s, o, f, js, fjs) {
      if (w[o]) return;
      w['BB-Widget'] = o; w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', 'w1', 'https://bed-booking.com/widget/widget.js'));
    w1('init', {targetElementId: '${id}',widgetId: 'e3fe037753462b15ddfece06ed2192930870f478', type:'room', room: '1404024'})`}</Script>
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={handleClickOpen}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose} keepMounted>
        <div id={id}></div>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { BookNow };
