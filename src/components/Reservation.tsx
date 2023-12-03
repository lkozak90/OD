import { Card } from "@mui/material";
import Script from "next/script";

const Reservation = () => {
  return (
    <>
      <Script id="reservation-script">{`(function (w, d, s, o, f, js, fjs) {
      if (w[o]) return;
      w['BB-Widget'] = o; w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', 'w1', 'https://bed-booking.com/widget/widget.js'));
    w1('init', {targetElementId: 'widgetHolder_sgmtwbveh',widgetId: 'e3fe037753462b15ddfece06ed2192930870f478', type:'simple', staticWidget: 1})`}</Script>
      <Card
        id="widgetHolder_sgmtwbveh"
        sx={{ maxWidth: 776, width: "100%" }}
      ></Card>
    </>
  );
};

export { Reservation };
